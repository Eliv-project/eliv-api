import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Permission } from '@prisma/client';
import { JwtPayload } from 'src/auth/types/jwt-payload.type';
import { UsersService } from 'src/users/users.service';
import { PERMISSIONS_KEY } from '../decorators/need-permissions/need-permissions.decorator';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private userService: UsersService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredPermissions) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();

    const { username }: JwtPayload = req.user;
    const currentUser: any = await this.userService.findOne(
      {
        username,
      },
      {
        role: {
          include: {
            permissions: {
              include: {
                permission: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    );

    const { permissions } = currentUser.role;

    return requiredPermissions.some((permissionName) =>
      permissions.find(
        (por) => (por.permission as Permission).name === permissionName,
      ),
    );
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
