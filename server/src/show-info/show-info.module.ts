import { MikroOrmModule } from "@mikro-orm/nestjs";
import { ShowInfoController } from "./show-info.controller";
import { ShowInfoService } from "./show-info.service";
import { ShowInfo } from "./show-info.entity";
import { Module } from "@nestjs/common";


@Module({
    controllers: [ShowInfoController],
    providers: [ShowInfoService],
    imports: [MikroOrmModule.forFeature({ entities: [ShowInfo] })],
    exports: [ShowInfoService]
})

export class ShowInfoModule { }