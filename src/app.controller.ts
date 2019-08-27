import {
  Controller,
  Get,
  Post,
  Query,
  Delete,
  Body
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): any {
    return this.appService.findAll();
  }

  @Get('findOne')
  findOne(@Query() query): Promise<[]> {
    return this.appService.findOne(query)
  }

  @Post('create')
  async create(@Body() data): Promise<[]> {
    return this.appService.create(data)
  }

  @Delete('/delete')
    async delete(@Body() data): Promise<any> {
      return this.appService.delete(data);
  }
}
