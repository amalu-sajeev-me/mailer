import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from '@config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { PORT } = env;
  await app.listen(PORT);
}
bootstrap();
