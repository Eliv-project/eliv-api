import { Stream } from 'stream';

export interface Video2HlsOptions {
  createReadStream: () => Stream;
}
