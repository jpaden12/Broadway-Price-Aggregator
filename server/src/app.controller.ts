import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({type: 'string'})
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('auth')
  @ApiOkResponse({type: 'string'})
  authEndpoint(): string {
    return this.appService.authEndpoint();
  }
}
