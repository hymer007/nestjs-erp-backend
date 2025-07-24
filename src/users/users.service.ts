import { Injectable } from '@nestjs/common';

type User = { userId: number; username: string; password: string };

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findOne(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }
}