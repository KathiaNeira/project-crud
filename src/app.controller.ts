import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Delete
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Promise<[]> {
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

  @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.appService.delete(id);
    }  
}
