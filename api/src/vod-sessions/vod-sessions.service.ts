import { Injectable } from '@nestjs/common';
import { CreateVodSessionInput } from './dto/create-vod-session.input';
import { UpdateVodSessionInput } from './dto/update-vod-session.input';

@Injectable()
export class VodSessionsService {
  create(createVodSessionInput: CreateVodSessionInput) {
    return 'This action adds a new vodSession';
  }

  findAll() {
    return `This action returns all vodSessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vodSession`;
  }

  update(id: number, updateVodSessionInput: UpdateVodSessionInput) {
    return `This action updates a #${id} vodSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} vodSession`;
  }
}
