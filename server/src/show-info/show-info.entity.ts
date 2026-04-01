import { Collection, Entity, Enum, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { ShowLevel, ShowType } from "./types";
import { PriceListing } from "../price-listing/price-listing.entity";



@Entity()
export class ShowInfo {

  @PrimaryKey()
  id?: number;

  @Property()
  show_name!: string;

  @OneToMany(() => PriceListing, price_listing => price_listing.show_id)
  price_listings? = new Collection<PriceListing>(this);

  @Property()
  venue!: string;

  @Property()
  address!: string;

  @Property()
  website!: string;

  @Enum(() => ShowType)
  type!: ShowType;
    
  @Enum(() => ShowLevel)
  level!: ShowLevel;

  @Property({ nullable: true})
  runtime?: number;

  @Property()
  opening_date!: Date;

  @Property({ nullable: true })
  closing_date?: Date;

  @Property()
  closed!: boolean;

  @Property({ default: false })
  display!: boolean;
}