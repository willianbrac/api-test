import { Book } from '@/database/entities/__mocks__/book.entity';

export class ListBooksService {
  list = jest.fn(() => [Book]);
}
