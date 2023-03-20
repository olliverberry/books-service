import { Logger, Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';

@Module({
  providers: [BooksService, Logger],
  controllers: [BooksController],
})
export class BooksModule {}
