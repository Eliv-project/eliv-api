import { Stream } from 'stream';

export interface WriteFileOptions {
  createReadStream: () => Stream;
  filename: string;
}
