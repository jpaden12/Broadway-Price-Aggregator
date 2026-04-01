import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ShowInfoModule } from './show-info/show-info.module';
import { PriceListingModule } from './price-listing/price-listing.module';

@Module({
  imports: [MikroOrmModule.forRoot(), ShowInfoModule, PriceListingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
