import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { ShowInfo } from "./show-info.entity";
import { ShowInfoService } from "./show-info.service";
import { CreateShowInfoDto } from "./dtos/create-show_info.dto";


@Controller('api')
export class ShowInfoController {
    constructor(private readonly showInfoService: ShowInfoService) {}

    @Post('add-new-show')
    async postNewShow(@Body() show: CreateShowInfoDto): Promise<ShowInfo> {
        return await this.showInfoService.postNewShow(show);
    }

    @Get('get-show-by-id')
    async getShowById(@Query() param: object): Promise<ShowInfo | null> {
        // console.log(param['id']);
        // console.log(param['show_name']);
        return await this.showInfoService.getShowById(param);
    }

    @Get('get-all-shows')
    async getAllShows(): Promise<ShowInfo[]> {
        return await this.showInfoService.getAllShows();
    }

    @Delete('delete-show')
    async deleteShow(@Query() param: object): Promise<boolean> {
        return this.showInfoService.deleteShow(param);
    }
    
    @Patch('update-show/:id')
    async updateShow(@Param('id') id: number, @Body() body: object): Promise<ShowInfo> {
        console.log(body)
        return await this.showInfoService.updateShow(id, body);
    }
}