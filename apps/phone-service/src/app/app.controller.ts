import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('phones')
  getData() {
    return [{
      id: '1b',
      name: 'Super Flip Phone'
    }];
  }
}
