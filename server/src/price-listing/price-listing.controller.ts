import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { PriceListingService } from "./price-listing.service";
import { PriceListing } from "./price-listing.entity";
import { PriceListingtDto } from "./price-listing.dto";
import { ShowLevel } from "src/show-info/types";



@Controller('api')
export class PriceListingController {
    constructor(private readonly priceListingService: PriceListingService) {}

    @Post('AddPriceListing')
    async postNewListing(@Body('new_listing') listing: PriceListingtDto, @Body('show_name') name: string, @Body('level') level: ShowLevel): Promise<PriceListing> {
        return await this.priceListingService.createPriceListing(listing, name, level);
    }

    @Get('AllPriceListings')
    async getAllPriceListings(): Promise<PriceListing[]> {
        return await this.priceListingService.getAllPriceListings();                                             
    }

    @Get('GetListingById/:id')
    async getPriceListing(@Param() param: object): Promise<PriceListing | null> {
        return await this.priceListingService.getPriceListing(param);
    }

    @Delete('PriceListing')
    async deletePriceListing(@Query() param): Promise<boolean> {
        const listingId: number = param['id'];
        return await this.priceListingService.deletePriceListing(listingId);
    }

}

