import { Field, InputType } from '@nestjs/graphql';
// @ts-ignore
import { GraphQLUpload } from 'graphql-upload';
import { VideoCreateInput } from 'src/prisma/@generated/video/video-create.input';
import { FileUpload } from './file-upload';

@InputType()
export class VideoCreateInputWithFile extends VideoCreateInput {
  @Field(() => GraphQLUpload)
  file: Promise<FileUpload>;
}
