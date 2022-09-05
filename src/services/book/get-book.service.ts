import { Injectable } from '@nestjs/common';
import { BookRepository } from '@/repositories/book.repository';
import { Book } from '@/database/entities/book.entity';

@Injectable()
export class GetBookService {
  constructor(private bookRepository: BookRepository) {}
  async get(id: string): Promise<Book | undefined> {
    return this.bookRepository.findOne(id);
  }
}
