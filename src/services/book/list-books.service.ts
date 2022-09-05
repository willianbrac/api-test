import { Injectable } from '@nestjs/common';
import { Book } from '@/database/entities/book.entity';
import { BookRepository } from '@/repositories/book.repository';

@Injectable()
export class ListBooksService {
  constructor(private bookRepository: BookRepository) {}
  async list(): Promise<Book[]> {
    return this.bookRepository.find();
  }
}
