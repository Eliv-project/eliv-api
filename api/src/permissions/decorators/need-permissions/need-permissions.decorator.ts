import { SetMetadata } from '@nestjs/common';
import Permissions from 'src/common/constants/permissions';

export const PERMISSIONS_KEY = 'permissions';
export const NeedPermissions = (...requiredPermissions: string[]) =>
  SetMetadata(PERMISSIONS_KEY, [...requiredPermissions, Permissions.super]);
