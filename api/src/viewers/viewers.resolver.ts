import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ViewerCreateInput } from 'src/prisma/@generated/viewer/viewer-create.input';
import { Viewer } from 'src/prisma/@generated/viewer/viewer.model';
import { ViewersService } from './viewers.service';
import { Prisma } from '@prisma/client';
import { ViewerWhereInput } from 'src/prisma/@generated/viewer/viewer-where.input';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/prisma/@generated/user/user.model';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Resolver(() => Viewer)
export class ViewersResolver {
  constructor(private readonly viewersService: ViewersService) {}

  @Mutation(() => Viewer)
  @IsPublic(true)
  async createViewer(@CurrentUser() me: User) {
    // If viewer (user) existed, return
    if (me) {
      const myViewer = await this.viewersService.findFirst({
        where: { user: { is: { id: { equals: me.id } } } },
      });

      if (myViewer) {
        return myViewer;
      }
    }

    // Otherwise create a new one
    return this.viewersService.create({
      data: {
        user: me
          ? {
              connect: { id: me.id },
            }
          : undefined,
      },
    });
  }

  // @Query(() => [Viewer], { name: 'viewers' })
  // findAll() {
  //   return this.viewersService.findAll();
  // }

  // @Query(() => Viewer, { name: 'viewer' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.viewersService.findOne(id);
  // }

  @Query(() => Int, { name: 'countViewer' })
  countViewer(@Args('where') where: ViewerWhereInput) {
    return this.viewersService.count({
      where: where as Prisma.ViewerWhereInput,
    });
  }

  // @Mutation(() => Viewer)
  // @IsPublic()
  // @UseGuards(IsValidViewer)
  // updateViewer(
  //   @Args('where') where: ViewerWhereUniqueInput,
  //   @Args('data') data: ViewerUpdateInput,
  //   @CurrentViewer() currentViewer: Viewer,
  // ) {
  //   return this.viewersService.update({
  //     where: { id: currentViewer.id },
  //     data: {

  //     }
  //   });
  // }

  // @Mutation(() => Viewer)
  // removeViewer(@Args('where') where: ViewerWhereUniqueInput) {
  //   return this.viewersService.remove({
  //     where: where as Prisma.ViewerWhereUniqueInput,
  //   });
  // }
}
