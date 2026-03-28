import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { PriceListing } from "./price-listing.entity";
import { PriceListingController } from "./price-listing.controller";
import { PriceListingService } from "./price-listing.service";


@Module({ 
    controllers: [PriceListingController],
    providers: [PriceListingService],
    imports: [MikroOrmModule.forFeature({ entities: [PriceListing]})],
    exports: [PriceListingService]
})

export class PriceListingModule {}