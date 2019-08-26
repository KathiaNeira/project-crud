import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class AppService {
  private readonly users: User[];

  constructor() {
    this.users = [
        {
          "id": 2,
          "name": "Batman"
        },
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 3,
          "name": "Superman"
        }
    ];
  }

  async findAll(): Promise<User | undefined> {
    return this.users;
  }

  async findOne(name): Promise<User | undefined> {
    return this.users.find(user => user.name === name);
  }

  async delete(id): Promise<User> {
    this.users
  }

  async create(data): Promise<User> {
    this.users.push(data)
  }
  
}