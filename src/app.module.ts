import { Module, Logger } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { InterceptorsModule } from './interceptors/interceptors.module';

@Module({
  providers: [Logger],
  imports: [BooksModule, InterceptorsModule],
})
export class AppModule {}
