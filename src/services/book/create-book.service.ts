import { Injectable } from '@nestjs/common';
import { BookRepository } from '@/repositories/book.repository';
import { CreateBookInput } from '@/inputs/book/create-book.input';
import { Book } from '@/database/entities/book.entity';

@Injectable()
export class CreateBookService {
  constructor(private bookRepository: BookRepository) {}
  async create(input: CreateBookInput): Promise<Book | undefined> {
    const book = await this.bookRepository.save(input);
    return this.bookRepository.findOne(book.id, { relations: ['author'] });
  }
}
