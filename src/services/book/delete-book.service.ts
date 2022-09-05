import { Injectable } from '@nestjs/common';
import { BookRepository } from '@/repositories/book.repository';
import { Book } from '@/database/entities/book.entity';

@Injectable()
export class DeleteBookService {
  constructor(private bookRepository: BookRepository) {}
  async delete(id: string): Promise<true> {
    const book = await this.bookRepository.findOneOrFail(id);
    await this.bookRepository.remove(book);
    return true;
  }
}
