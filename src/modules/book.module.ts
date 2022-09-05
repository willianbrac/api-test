import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateBookResolver } from '@/resolvers/book/create-book.resolver';
import { UpdateBookResolver } from '@/resolvers/book/update-book.resolver';
import { CreateBookService } from '@/services/book/create-book.service';
import { DeleteBookService } from '@/services/book/delete-book.service';
import { UpdateBookService } from '@/services/book/update-book.service';
import { BookRepository } from '@/repositories/book.repository';
import { DeleteBookResolver } from '@/resolvers/book/delete-book.resolver';
import { GetBookService } from '@/services/book/get-book.service';
import { GetBookResolver } from '@/resolvers/book/get-book.resolver';
import { ListBooksService } from '@/services/book/list-books.service';
import { ListBooksResolver } from '@/resolvers/book/list-books.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([BookRepository])],
  providers: [
    CreateBookService,
    CreateBookResolver,
    DeleteBookService,
    DeleteBookResolver,
    GetBookService,
    GetBookResolver,
    ListBooksService,
    ListBooksResolver,
    UpdateBookService,
    UpdateBookResolver,
  ],
})
export class BookModule {}
