import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { User } from 'src/prisma/@generated/user/user.model';
import { VideoWhereUniqueInput } from 'src/prisma/@generated/video/video-where-unique.input';
import { ViewCreateInput } from 'src/prisma/@generated/view/view-create.input';
import { View } from 'src/prisma/@generated/view/view.model';
import { ViewsService } from './views.service';

@Resolver(() => View)
export class ViewsResolver {
  constructor(private readonly viewsService: ViewsService) {}

  @Mutation(() => View)
  @IsPublic(true)
  createView(@Args('data') data: ViewCreateInput, @CurrentUser() me: User) {
    return this.viewsService.create({
      ...data,
      user: me ? { connect: { id: me.id } } : undefined,
    });
  }

  @Mutation(() => View)
  @IsPublic(true)
  countView(@Args('where') where: VideoWhereUniqueInput) {
    return this.viewsService.count({
      video: {
        is: {
          OR: [
            { id: { equals: where.id } },
            { dirId: { equals: where.dirId } },
            { slug: { equals: where.slug } },
          ],
        },
      },
    });
  }

  // @Query(() => View, { name: 'view' })
  // findOne(@Args('where') where: ViewWhereUniqueInput) {
  //   return this.viewsService.findOne(where);
  // }

  // @Mutation(() => View)
  // updateView(
  //   @Args('where') where: ViewWhereUniqueInput,
  //   @Args('data') data: ViewUpdateInput,
  // ) {
  //   return this.viewsService.update(where, data);
  // }

  // @Mutation(() => View)
  // removeView(@Args('where') where: ViewWhereUniqueInput) {
  //   return this.viewsService.remove(where);
  // }
}
