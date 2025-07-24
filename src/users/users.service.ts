import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  findOne(username: string): User {
    return this.users.find(user => user.username === username);
  }

  create(user: User) {
    this.users.push(user);
    return user;
  }
}
