import { Book } from './book.interface';

export interface ListBooksService {
  list(): Promise<Book[]>;
}
