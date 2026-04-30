import { DecimalType, Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { ShowInfo } from "../show-info/show-info.entity";
import { ShowLevel, ShowTime } from "../show-info/types";


@Entity()
export class PriceListing {

    @PrimaryKey()
    id?: number;

    @ManyToOne(() => ShowInfo, {index: 'show_id'})
    show_id?: ShowInfo; 

    // TODO: Make this non-null
    @Property({ nullable: true}) 
    show_name?: string;

    @Property() 
    site_name?: string;

    @Property({ type: DecimalType, precision: 10, scale: 2})
    price?: string;

    @Property({ nullable: true})
    show_date_time?: Date

    @Property()
    show_time_period?: ShowTime

    @Property({ nullable: true })
    website?: string

    @Property({ type: 'datetime'})
    date_of_capture?: Date

    @Property({ type: 'datetime', default: new Date().toISOString() })
    date_last_updated?: Date

    @Property()
    fixed?: boolean

    @Property({ nullable: true})
    notes?: string

    constructor(show_id: ShowInfo, show_name: string, site_name?: string, price?: string, show_date_time?: Date,
         show_time_period?: ShowTime, fixed: boolean = false, notes?: string, website?: string, ) {
        this.show_name = show_name;
        this.show_id = show_id;
        this.site_name = site_name;
        this.price = price;
        this.show_date_time = show_date_time;
        this.show_time_period = show_time_period;
        this.fixed = fixed;
        this.notes = notes;
        this.website = website;
        
    }

}