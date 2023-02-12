import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { StreamKeyCreateInput } from 'src/prisma/@generated/stream-key/stream-key-create.input';
import { StreamKeyWhereUniqueInput } from 'src/prisma/@generated/stream-key/stream-key-where-unique.input';
import { StreamKeyWhereInput } from 'src/prisma/@generated/stream-key/stream-key-where.input';
import { StreamKey } from 'src/prisma/@generated/stream-key/stream-key.model';
import { User } from 'src/prisma/@generated/user/user.model';
import { StreamKeysService } from './stream-keys.service';
import { Prisma } from '@prisma/client';

@Resolver(() => StreamKey)
export class StreamKeysResolver {
  constructor(private readonly streamKeysService: StreamKeysService) {}

  @Mutation(() => StreamKey)
  async createStreamKey(
    @Args('data') data: StreamKeyCreateInput,
    @CurrentUser() me: User,
  ) {
    if (!data.isDefault) {
      return this.streamKeysService.create(data as Prisma.StreamKeyCreateInput);
    }

    const defaultStreamKey = await this.streamKeysService.findFirst({
      userId: { equals: me.id },
      isDefault: { equals: true },
    });
    if (defaultStreamKey) {
      throw new BadRequestException('DEFAULT_STREAM_KEY_EXISTED');
    }

    return this.streamKeysService.create(data as Prisma.StreamKeyCreateInput);
  }

  @Query(() => [StreamKey], { name: 'streamKeys' })
  findAll(@Args('where') where: StreamKeyWhereInput) {
    return this.streamKeysService.findAll(where);
  }

  // @Query(() => StreamKey, { name: 'streamKey' })
  // findOne(@Args('where') where: StreamKeyWhereUniqueInput) {
  //   return this.streamKeysService.findOne(where);
  // }

  // @Mutation(() => StreamKey)
  // updateStreamKey(
  //   @Args('where') where: StreamKeyWhereUniqueInput,
  //   @Args('data') data: StreamKeyUpdateInput,
  // ) {
  //   return this.streamKeysService.update(where, data);
  // }

  @Mutation(() => StreamKey)
  removeStreamKey(@Args('where') where: StreamKeyWhereUniqueInput) {
    return this.streamKeysService.remove(where);
  }
}
