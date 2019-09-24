import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user/user.entity';
import { UserInterface } from './interface/user';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
    ) { }

  create(user: UserInterface) {
    return this.usersRepository.save(user);
  }

  findAll(): any {
    return this.usersRepository.find();
  }

}