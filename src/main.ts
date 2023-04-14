import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './app.module';
import { getLoggerOptions } from './logging/logger.options';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const loggerConfig = getLoggerOptions();
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(loggerConfig),
  });
  await app.listen(port);
}
bootstrap();
