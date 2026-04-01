import { DecimalType, Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { ShowInfo } from "../show-info/show-info.entity";
import { ShowTime } from "../show-info/types";


@Entity()
export class PriceListing {

    @PrimaryKey()
    id?: number;

    @ManyToOne(() => ShowInfo, {index: 'show_id'})
    show_id?: ShowInfo; 

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

    @Property({ type: 'datetime'})
    date_of_capture?: Date

    @Property()
    fixed?: boolean

    @Property({ nullable: true})
    notes?: string

}