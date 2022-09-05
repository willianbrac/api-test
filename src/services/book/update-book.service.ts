import { Injectable } from '@nestjs/common';
import { BookRepository } from '@/repositories/book.repository';
import { UpdateBookInput } from '@/inputs/book/update-book.input';
import { Book } from '@/database/entities/book.entity';

@Injectable()
export class UpdateBookService {
  constructor(private bookRepository: BookRepository) {}
  async update(id: string, input: UpdateBookInput): Promise<Book> {
    const book = await this.bookRepository.findOneOrFail(id);
    const bookUpdated = Object.assign(book, input);
    return this.bookRepository.save(bookUpdated);
  }
}
