import { InjectRepository } from "@mikro-orm/nestjs";
import { ShowInfo } from "./show-info.entity";
import { ShowInfoRepository } from "./show-info.repository";
import { Injectable } from "@nestjs/common";
import { CreateShowInfoDto } from "./dtos/create-show_info.dto";
import { EntityManager, wrap } from "@mikro-orm/postgresql";
import { ShowLevel, ShowType } from "./types";
import { ShowInfo as ShowInfoType }  from "./types";

@Injectable()
export class ShowInfoService {
    constructor(@InjectRepository(ShowInfo) private readonly showInfoRepository: ShowInfoRepository, 
    private readonly em: EntityManager) {}

    async postNewShow(show: CreateShowInfoDto): Promise<ShowInfo> {

        // const newShow = new ShowInfo();
        // newShow.address = "242 W 45th St, New York, NY 10036";
        // newShow.show_name = "Illinoise";
        // newShow.venue = "St. James Theatre";
        // newShow.website = "https://outsidersmusical.com";
        // newShow.type = ShowType.MUSICAL;
        // newShow.level = ShowLevel.BROADWAY;
        // newShow.runtime = 180;
        // newShow.opening_date = new Date();
        // newShow.closing_date = new Date(2023, 12, 4);
        // newShow.closed = true;

        const newShow: ShowInfo = {
            show_name: show.show_name,
            venue: show.venue,
            address: show.address, 
            website: show.website, 
            type: show.type, 
            level: show.level,
            runtime: show.runtime, 
            opening_date: show.opening_date, 
            closing_date: show.closing_date, 
            closed: show.closed, 
            display: show.display
        }

        this.showInfoRepository.insert(newShow);
        return newShow;
    }

    async getAllShows(): Promise<ShowInfo[]> {
        // Add error handling
        
        return this.showInfoRepository.findAll();
    }

    async getShowById(param: object): Promise<ShowInfo | null> {
        return this.showInfoRepository.findOne(
            {
                id: param['id'], 
                show_name: param['show_name'] 
            });
    }

    async deleteShow(param: object): Promise<boolean> {
        const showRef = this.em.getReference(ShowInfo, param['id']);
        // Add error handling
        await this.em.remove(showRef);
        this.em.flush();
        return true;
    }

    async updateShow(id: number, body: object): Promise<ShowInfo> {
        const show = await this.em.findOneOrFail(ShowInfo, id);

        // Add error handling
        wrap(show).assign({
            show_name: body['show_name'] ?? show.show_name,
            venue: body['venue'] ?? show.venue,
            website: body['website'] ?? show.website,
            address: body['address'] ?? show.address,
            level: body['show_level'] ?? show.level,
            opening_date: body['opening_date'] ?? show.opening_date,
            closing_date: body['closing_date'] ?? show.closing_date,
            closed: body['closed'] ?? show.closed,
            display: body['display'] ?? show.display,
        });
        this.em.flush()
        return show;
    }
}