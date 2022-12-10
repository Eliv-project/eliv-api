import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginInputDto } from './dto/login-input.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(input: LoginInputDto) {
    const user = await this.usersService.findOne({
      OR: [
        { email: input.usernameOrEmail },
        { username: input.usernameOrEmail },
      ],
    });

    // TODO: Add bcrypt to hash password
    if (user && user.password === input.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
