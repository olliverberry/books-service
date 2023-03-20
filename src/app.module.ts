import { Module, Logger, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  providers: [Logger],
  imports: [BooksModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(BooksController);
  }
}
