import { ShowInfo } from "src/show-info/show-info.entity";
import { ShowTime } from "src/show-info/types";


export class PriceListingtDto {
    show_id: ShowInfo; 
    show_name: string;
    site_name: string; 
    price: string; 
    show_date_time: Date; 
    show_time_period: ShowTime; 
    date_of_capture: Date; 
    fixed: boolean; 
    notes: string; 
}