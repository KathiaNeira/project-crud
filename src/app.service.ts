import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class AppService {
  private readonly users: User[];

  constructor() {
    this.users = [
        {
          "id": 1,
          "name": "Carla"
        },
        {
          "id": 2,
          "name": "José"
        },
        {
          "id": 3,
          "name": "Pedro"
        }
    ];
  }

  findAll(): any {
    return this.users;
  }

  async findOne(param): Promise<User | undefined> {
    return this.users.find(user => user.name === param.name);
  }

  async delete(param): Promise<User> {
    let count = 0;
    this.users.filter((item, index) => {
      if (item.id === param.id) {
        count = index;
      }
    });
    this.users.splice(count, 1);
    return this.users;
  }

  async create(data): Promise<User> {
    this.users.push(data);
    return this.users;
  }
}