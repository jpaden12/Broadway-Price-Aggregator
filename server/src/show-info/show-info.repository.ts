import { EntityRepository } from "@mikro-orm/postgresql";
import { ShowInfo } from "./show-info.entity";

export class ShowInfoRepository extends EntityRepository<ShowInfo> { }