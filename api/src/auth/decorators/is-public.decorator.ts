import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export type PublicType = 'all' | 'withAuth';
export const IsPublic = (withAuth?: boolean) =>
  SetMetadata<string, PublicType>(IS_PUBLIC_KEY, withAuth ? 'withAuth' : 'all');
