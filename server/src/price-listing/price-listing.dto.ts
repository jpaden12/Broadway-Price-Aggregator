import { ShowInfo } from "src/show-info/show-info.entity";
import { ShowTime, ShowType } from "src/show-info/types";
import { PriceListing } from "./price-listing.entity";


export class PriceListingDto {
    show_id?: ShowInfo; 
    show_name: string;
    site_name: string; 
    price: string; 
    show_date_time: Date; 
    show_time_period: ShowTime; 
    fixed: boolean; 
    notes: string; 
    website: string;

    constructor(listing: PriceListing) {
        this.show_id = listing.show_id;
        this.site_name = listing.site_name ?? "";
        this.show_name = listing.show_name ?? "";
        this.show_name = listing.site_name ?? "";
        this.price = listing.price ?? "";
        this.show_date_time = listing.show_date_time ?? new Date();
        this.show_time_period = listing.show_time_period ?? ShowTime.EVENING;
        this.fixed = listing.fixed ?? false;
        this.notes = listing.notes ?? "";
        this.website = listing.website ?? "";
    }
}