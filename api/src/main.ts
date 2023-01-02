import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { graphqlUploadExpress } from 'graphql-upload';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 10 }));

  // Prevent prisma calling process.exit() before app's shutdown hooks fire
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  const configService = app.get(ConfigService);
  const PORT = configService.get('port');
  await app.listen(PORT, () => console.log('Server running at port', PORT));
}
bootstrap();
