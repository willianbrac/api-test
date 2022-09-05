import { Book } from './book.interface';

export type CreateBookInput = Omit<
  Book,
  'id' | 'author' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;

export interface CreateBookService {
  create(input: CreateBookInput): Promise<Book>;
}
