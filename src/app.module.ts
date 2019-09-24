import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { User } from './user.entity';
import { AppController } from './app.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
