import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { PriceListingService } from "./price-listing.service";
import { PriceListing } from "./price-listing.entity";
import { PriceListingtDto } from "./price-listing.dto";
import { ShowLevel } from "src/show-info/types";
import { ApiOkResponse } from "@nestjs/swagger";


@Controller('api')
export class PriceListingController {
    constructor(private readonly priceListingService: PriceListingService) {}

    @Post('AddPriceListing')
    @ApiOkResponse({type: PriceListing})
    async postNewListing(@Body('new_listing') listing: PriceListingtDto, @Body('show_name') name: string, @Body('level') level: ShowLevel): Promise<PriceListing> {
        return await this.priceListingService.createPriceListing(listing, name, level);
    }

    @Get('AllPriceListings')
    @ApiOkResponse({type: [PriceListing], isArray: true})
    async getAllPriceListings(): Promise<PriceListing[]> {
        return await this.priceListingService.getAllPriceListings();                                             
    }

    @Get('GetListingById/:id')
    @ApiOkResponse({type: PriceListing})
    async getPriceListing(@Param() param: object): Promise<PriceListing | null> {
        return await this.priceListingService.getPriceListing(param);
    }

    @Delete('PriceListing')
    @ApiOkResponse({description: "Price listing deleted successfully."})
    async deletePriceListing(@Query() param): Promise<boolean> {
        const listingId: number = param['id'];
        return await this.priceListingService.deletePriceListing(listingId);
    }

    @Get('CheapestPriceByShow/:id')
    @ApiOkResponse({type: PriceListing})
    async cheapestPriceShow(@Param('id') showId): Promise<PriceListing | null> {
        // Check if the show id exists in the DB. Return an error if it doesn't. 
        return await this.priceListingService.cheapestPriceShow(showId);
    }
}

