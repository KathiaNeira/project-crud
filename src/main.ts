import { NestFactory } from '@nestjs/core';
import { Appodule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(Appodule);
  await app.listen(3000);
}
bootstrap();
