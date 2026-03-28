import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  authEndpoint(): string {
    return 'Insert authorization logic here';
  }
}
