import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";
import { PriceListing } from "./price-listing.entity";
import { PriceListingRepository } from "./price-listing.repository";
// import { ShowTime } from "src/show-info/types";
import { EntityManager } from "@mikro-orm/postgresql";
import { ShowInfo } from "src/show-info/show-info.entity";
import { ShowLevel, ShowTime } from "src/show-info/types";
import { PriceListingtDto } from "./price-listing.dto";






@Injectable()
export class PriceListingService {
    constructor(@InjectRepository(PriceListing) private readonly priceListingRepository: PriceListingRepository, 
                private readonly em: EntityManager) {}

    async createPriceListing(listing: PriceListingtDto, given_show_name: string, show_level: ShowLevel): Promise<PriceListing> {

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
            notes: listing.notes
        }
        // newListing.price = "40.00";
        // newListing.fixed = true; 
        // newListing.show_id = showRef;
        // newListing.show_time_period = ShowTime.MATINEE;
        // newListing.site_name = "Rush";
        // newListing.notes = "Under 30 rush tickets"
        // newListing.show_date_time = new Date(2025, 3, 4, 17, 0);
        // newListing.date_of_capture = new Date();

        await this.priceListingRepository.insert(newListing);
        return newListing;
    }

    async getAllPriceListings(): Promise<PriceListing[]> {
        return this.priceListingRepository.findAll();
    }

    async getPriceListing(param: object): Promise<PriceListing | null> {
        return this.priceListingRepository.findOne({
            id: param['id']
        });
    }

    async deletePriceListing(id: number): Promise<boolean> {
        const listingRef = this.em.getReference(PriceListing, id);

        await this.em.remove(listingRef);
        this.em.flush();
        return true;
    }


 
}