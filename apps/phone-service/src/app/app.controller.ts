import { Controller, Get, Param } from '@nestjs/common';
import { Phone } from '@tuskphone/data-access-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/phones')
  getData(): Phone[] {
    return this.appService.getAllPhones();
  }

  @Get('api/phones/:id')
  getPhone(@Param() params: any): Phone {
    return this.appService.getPhoneById(params.id);
  }
}
