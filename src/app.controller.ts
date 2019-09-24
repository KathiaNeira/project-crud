import {
  Controller,
  Get,
  Post,
  Body
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): any {
    return this.appService.findAll();
  }

  @Post()
  async create(@Body() data): Promise<any> {
    return this.appService.create(data);
  }
}
