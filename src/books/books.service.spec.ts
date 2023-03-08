import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';

describe('BooksService', () => {
  let booksService: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService],
    }).compile();

    booksService = module.get<BooksService>(BooksService);
  });

  describe('getBooks', () => {
    it('should return an array of books', async () => {
      expect(booksService.getBooks()).toHaveLength(1);
    });
  });

  describe('getBook', () => {
    it('should return a book', async () => {
      expect(booksService.getBook('fakeId')).toBeDefined();
    });

    it('should return undefined', async () => {
      expect(booksService.getBook('idDoesNotExist')).toBeUndefined();
    });
  });
});
