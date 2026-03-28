import { ShowLevel, ShowType } from "../types";


export class CreateShowInfoDto {

    show_name: string;
    venue: string; 
    address: string;
    website: string;
    type: ShowType; 
    level: ShowLevel; 
    runtime?: number; 
    opening_date: Date; 
    closing_date?: Date; 
    closed: boolean = false; 
    display: boolean;
}