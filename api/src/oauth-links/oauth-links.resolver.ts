import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OauthLinksService } from './oauth-links.service';
import { CreateOauthLinkInput } from './dto/create-oauth-link.input';
import { UpdateOauthLinkInput } from './dto/update-oauth-link.input';
import { OAuthLink } from './entities/oauth-link.entity';

@Resolver(() => OAuthLink)
export class OauthLinksResolver {
  constructor(private readonly oauthLinksService: OauthLinksService) {}

  @Mutation(() => OAuthLink)
  createOauthLink(
    @Args('createOauthLinkInput') createOauthLinkInput: CreateOauthLinkInput,
  ) {
    return this.oauthLinksService.create(createOauthLinkInput);
  }

  @Query(() => [OAuthLink], { name: 'oauthLinks' })
  findAll() {
    return this.oauthLinksService.findAll();
  }

  @Query(() => OAuthLink, { name: 'oauthLink' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.oauthLinksService.findOne(id);
  }

  @Mutation(() => OAuthLink)
  updateOauthLink(
    @Args('updateOauthLinkInput') updateOauthLinkInput: UpdateOauthLinkInput,
  ) {
    return this.oauthLinksService.update(
      updateOauthLinkInput.id,
      updateOauthLinkInput,
    );
  }

  @Mutation(() => OAuthLink)
  removeOauthLink(@Args('id', { type: () => Int }) id: number) {
    return this.oauthLinksService.remove(id);
  }
}
