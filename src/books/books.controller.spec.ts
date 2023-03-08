import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';

describe('BooksController', () => {
  let booksController: BooksController;
  let booksService: BooksService;
  let books: Book[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    booksController = module.get<BooksController>(BooksController);
    booksService = module.get<BooksService>(BooksService);
    books = [
      {
        id: "testId",
        author: "testAuthor",
        category: "testCategory",
        title: "testTitle",
      },
    ];
  });

  describe('getBooks', () => {
    it('should return an array of books', async () => {
      jest.spyOn(booksService, 'getBooks').mockImplementation(() => books);
      
      expect(booksController.getBooks()).resolves.toBe(books);
    });
  });

  describe('getBook', () => {
    it('should return a book', async () => {
      jest.spyOn(booksService, 'getBook').mockImplementation(id => books.find(book => book.id === id));
      
      expect(booksController.getBook('testId')).resolves.toBe(books[0]);
    });

    it('should throw not found', async () => {
      jest.spyOn(booksService, 'getBook').mockImplementation(id => books.find(book => book.id === id));

      expect(booksController.getBook('idDoesNotExist')).rejects.toThrow(new NotFoundException(`unable to find book with id: idDoesNotExist`));
    })
  });
});
