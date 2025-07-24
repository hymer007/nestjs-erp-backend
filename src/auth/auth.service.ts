import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return {
      access_token: this.jwtService.sign(user),
    };
  }

  async register(username: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);
    this.usersService.create({
      userId: Date.now(),
      username,
      password: hashed,
    });
    return { message: 'User created' };
  }
}