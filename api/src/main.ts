import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
// @ts-ignore
import { graphqlUploadExpress } from 'graphql-upload';

export let app = null;

async function bootstrap() {
  app = await NestFactory.create(AppModule, { cors: true });

  app.use(graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 10 }));

  // Prevent prisma calling process.exit() before app's shutdown hooks fire
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  const configService = app.get(ConfigService);
  const PORT = configService.get('port');
  const isDev = configService.get('isDev');

  await app.listen(PORT, () => {
    if (isDev) {
      console.log('App running in dev mode');
    }
    console.log('Server running at port', PORT);
  });
}
bootstrap();
