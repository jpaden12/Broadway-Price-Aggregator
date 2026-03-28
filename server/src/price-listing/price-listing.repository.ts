import { EntityRepository } from "@mikro-orm/postgresql";
import { PriceListing } from "./price-listing.entity";


export class PriceListingRepository extends EntityRepository<PriceListing> {}