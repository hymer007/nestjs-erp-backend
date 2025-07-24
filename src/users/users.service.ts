import { Injectable } from '@nestjs/common';

interface User {
  userId: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  findOne(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }

  addUser(user: User) {
    this.users.push(user);
  }
}