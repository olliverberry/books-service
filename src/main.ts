import './utils/tracer';
import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './app.module';
import { getLoggerOptions } from './logging/logger.options';

async function bootstrap() {
  const loggerConfig = getLoggerOptions();
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(loggerConfig),
  });
  await app.listen(3000);
}
bootstrap();
