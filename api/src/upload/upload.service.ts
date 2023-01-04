import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { getOrCreateDir } from 'src/utils/getOrCreateDir';
import { UploadFileOptions } from './interfaces/upload-file-options.input';
import { UploadedFile } from './interfaces/uploaded-file.interface';

@Injectable()
export class UploadService {
  constructor(private readonly configService: ConfigService) {}

  writeFileToDir = ({
    createReadStream,
    filename,
  }: UploadFileOptions): Promise<UploadedFile> =>
    new Promise(async (resolve, reject) => {
      const uploadDirPath = getOrCreateDir(
        this.configService.get('uploadPath'),
      );
      const savePath = join(uploadDirPath, `./${filename}`);

      createReadStream()
        .pipe(createWriteStream(savePath))
        .on('finish', () =>
          resolve({
            filename,
            path: savePath,
          }),
        )
        .on('error', (err: Error) => {
          console.error(err);
          reject(new BadRequestException('SAVE_FILE_FAILED'));
        });
    });
}
