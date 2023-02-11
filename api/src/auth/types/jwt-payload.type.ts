import { User } from 'src/prisma/@generated/user/user.model';

export interface JwtPayload extends Pick<User, 'id' | 'email' | 'username'> {}
