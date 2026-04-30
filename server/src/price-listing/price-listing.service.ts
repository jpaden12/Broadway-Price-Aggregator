import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";
import { PriceListing } from "./price-listing.entity";
import { PriceListingRepository } from "./price-listing.repository";
import { EntityManager, LoadedReference, QueryOrder, serialize, wrap } from "@mikro-orm/postgresql";
import { ShowInfo } from "src/show-info/show-info.entity";
import { ShowLevel } from "src/show-info/types";
import { PriceListingDto } from "./price-listing.dto";
import { notEqual } from "assert";


@Injectable()
export class PriceListingService {
    constructor(@InjectRepository(PriceListing) private readonly priceListingRepository: PriceListingRepository, 
                private readonly em: EntityManager) {}


    async createPriceListing(listing: PriceListingDto, given_show_name: string, show_level: ShowLevel): Promise<PriceListing> {

        const showRef = await this.em.find(ShowInfo, { show_name: given_show_name, level: show_level});
        const finalShow: ShowInfo = showRef[0];

        const newListing: PriceListing = {
            show_id: finalShow,
            show_name: finalShow.show_name,
            site_name: listing.site_name, 
            price: listing.price, 
            show_date_time: listing.show_date_time, 
            show_time_period: listing.show_time_period, 
            date_of_capture: new Date(), 
            fixed: listing.fixed, 
            notes: listing.notes,
        }

        await this.priceListingRepository.insert(newListing);
        return newListing;
    }

    async batchAddListings(listings: any): Promise<any> {
        const listingsToAdd: PriceListing[] = await this.populateListings(listings); 

        await this.priceListingRepository.insertMany(listingsToAdd);
        return listings;
    }

    async populateListings(listings): Promise<PriceListing[]> {
        const promises = listings.map(async (listing) => {
            const showRef = await this.em.find(ShowInfo, {show_name: listing.show_name, level: listing.level as ShowLevel});
            const finalShow: ShowInfo = showRef[0];

            const finalListing = new PriceListing(finalShow, listing.show_name, listing.site_name, listing.price
                ,listing.show_date_time, listing.show_time_period, listing.fixed, listing.notes, listing.website)

            finalListing.date_last_updated = new Date();
            finalListing.date_of_capture = new Date();
            return finalListing;
        });
        return await Promise.all(promises);
    }

    async getAllPriceListings(): Promise<PriceListing[]> {
        return this.priceListingRepository.findAll();
    }

    async getPriceListing(id: number): Promise<PriceListing | null> {
       return this.priceListingRepository.findOne({
            id: id
        });

    }

    async deletePriceListing(id: number): Promise<boolean> {
        // Add error handling around deleting listing. Return false if unable to delete. 
        const listingRef: PriceListing = this.em.getReference(PriceListing, id);

        this.em.remove(listingRef);
        await this.em.flush();
        return true;
    }

    async getListingsByShow(given_show_id: object): Promise<PriceListing[]> {
        const listings = this.em.find(PriceListing,
        {
            show_id: given_show_id['show_id']
        });
        return listings;
    }

    async cheapestPriceShow(showId: number): Promise<PriceListing | null> {
        const cheapestListing = await this.em.find(PriceListing,
        {
            show_id: showId
        },
        {
            limit: 1,
            orderBy: { price: 'ASC'}
        });
        return cheapestListing[0];
    }
}