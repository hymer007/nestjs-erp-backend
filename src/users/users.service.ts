
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  async findOne(username: string) {
    return this.users.find(user => user.username === username);
  }

  async create(username: string, password: string) {
    const user = { userId: Date.now(), username, password };
    this.users.push(user);
    return user;
  }
}
