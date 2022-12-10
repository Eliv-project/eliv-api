import { Injectable } from '@nestjs/common';
import { CreateOauthLinkInput } from './dto/create-oauth-link.input';
import { UpdateOauthLinkInput } from './dto/update-oauth-link.input';

@Injectable()
export class OauthLinksService {
  create(createOauthLinkInput: CreateOauthLinkInput) {
    return 'This action adds a new oauthLink';
  }

  findAll() {
    return `This action returns all oauthLinks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oauthLink`;
  }

  update(id: number, updateOauthLinkInput: UpdateOauthLinkInput) {
    return `This action updates a #${id} oauthLink`;
  }

  remove(id: number) {
    return `This action removes a #${id} oauthLink`;
  }
}
