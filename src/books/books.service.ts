import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
    private readonly books: Book[] = [
        {
            id: "fakeId",
            title: "fake title",
            author: "fake author",
            category: "fake category",
        },
    ]

    getBooks(): Book[] {
        return this.books;
    }

    getBook(id: string): Book | undefined {
        return this.books.find(book => book.id === id);
    }
}
