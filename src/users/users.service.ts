import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: any[] = [];

  async findOne(username: string) {
    return this.users.find(user => user.username === username);
  }

  async create(user: any) {
    this.users.push(user);
    return user;
  }
}