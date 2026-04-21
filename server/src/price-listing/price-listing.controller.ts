import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { PriceListingService } from "./price-listing.service";
import { PriceListing } from "./price-listing.entity";
import { PriceListingDto } from "./price-listing.dto";
import { ShowLevel } from "src/show-info/types";
import { ApiOkResponse } from "@nestjs/swagger";


@Controller('api')
export class PriceListingController {
    constructor(private readonly priceListingService: PriceListingService) {}

    @Post('add-price-listing')
    @ApiOkResponse({type: PriceListing})
    async postNewListing(@Body('new_listing') listing: PriceListingDto, @Body('show_name') name: string, @Body('level') level: ShowLevel): Promise<PriceListing> {
        return await this.priceListingService.createPriceListing(listing, name, level);
    }

    // @Post('BatchAddPriceListings')
    // @ApiOkResponse({type: [PriceListing], isArray: true})
    // async batchAddListing(@Body() listing_list: PriceListingDto[]) {
    //     return await this.priceListingService.batchCreateListing(listing_list);
    // }

    @Get('all-price-listings')
    @ApiOkResponse({type: [PriceListing], isArray: true})
    async getAllPriceListings(): Promise<PriceListing[]> {
        return await this.priceListingService.getAllPriceListings();                                             
    }

    // Update endpoint to use either URL par
    @Get('get-listing-id/:id')
    @ApiOkResponse({type: PriceListing})
    async getPriceListing(@Param() param: object): Promise<PriceListing | null> {
        return await this.priceListingService.getPriceListing(param);
    }

    @Delete('price-listing')
    @ApiOkResponse({description: "Price listing deleted successfully."})
    async deletePriceListing(@Query() param): Promise<boolean> {
        const listingId: number = param['id'];
        return await this.priceListingService.deletePriceListing(listingId);
    }

    @Get('get-listings-show')
    @ApiOkResponse({type: [PriceListing], isArray: true})
    async getListingsByShow(@Query() showId: object): Promise<PriceListing[]> {
        return await this.priceListingService.getListingsByShow(showId);
    }

    @Get('cheapest-price-show/:show_id')
    @ApiOkResponse({type: PriceListing})
    async cheapestPriceShow(@Param('show_id') showId): Promise<PriceListing | null> {
        // Check if the show id exists in the DB. Return an error if it doesn't. 
        return await this.priceListingService.cheapestPriceShow(showId);
    }
}

