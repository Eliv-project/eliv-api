import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from 'src/prisma/@generated/user/user.model';

export const CURRENT_USER_KEY = 'currentUser';
export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);

    const user = ctx.getContext().user || ctx.getContext().req.user;
    SetMetadata<string, User>(CURRENT_USER_KEY, user);
    return user;
  },
);
