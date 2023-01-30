import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import {
  IS_PUBLIC_KEY,
  PublicType,
} from 'src/auth/decorators/is-public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt-access') {
  constructor(private reflector: Reflector) {
    super();
  }

  publicType: PublicType = null;

  getPublicType(context) {
    return this.reflector.getAllAndOverride<PublicType>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
  }

  canActivate(context: ExecutionContext) {
    const publicType = this.getPublicType(context);

    switch (publicType) {
      case 'all':
        return true;
      case 'withAuth':
        this.publicType = publicType;
        break;
      default:
    }

    return super.canActivate(context);
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  handleRequest(err, user, info) {
    // Handle strategy request
    // You can throw an exception based on either "info" or "err" arguments

    // Allow anonymous users to access route
    if (this.publicType === 'withAuth') {
      return user;
    }

    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
