import { Stream } from 'stream';

export interface UploadFileOptions {
  createReadStream: () => Stream;
  filename: string;
}
