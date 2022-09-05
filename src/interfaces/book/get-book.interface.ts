import { Book } from './book.interface';

export interface GetBookService {
  get(id: string): Promise<Book | null>;
}
