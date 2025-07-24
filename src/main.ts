import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('API_PORT') || 3001;
  await app.listen(port, '0.0.0.0'); // <- wichtig!
}
bootstrap();
