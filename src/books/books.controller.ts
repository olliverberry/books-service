import {
  Controller,
  Get,
  Logger,
  NotFoundException,
  Param,
} from '@nestjs/common';
import tracer from '../utils/tracer';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';

@Controller('api/books')
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    private readonly logger: Logger,
  ) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    tracer.scope().active().setOperationName('books');
    return this.booksService.getBooks();
  }

  @Get(':id')
  async getBook(@Param('id') id: string): Promise<Book> {
    tracer.scope().active().setOperationName('books');
    const book = this.booksService.getBook(id);
    if (book) {
      return book;
    }

    throw new NotFoundException(`unable to find book with id: ${id}`);
  }
}
