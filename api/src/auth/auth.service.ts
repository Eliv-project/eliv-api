import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { LoginInputDto } from './dto/login-input.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(input: LoginInputDto) {
    const user: User = await this.usersService.findOne({
      OR: [
        { email: input.usernameOrEmail },
        { username: input.usernameOrEmail },
      ],
    });

    if (!user) {
      return null;
    }

    const isMatch = bcrypt.compareSync(input.password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
