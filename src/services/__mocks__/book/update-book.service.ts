import { Book } from '@/database/entities/__mocks__/book.entity';
export class UpdateBookService {
  update = jest.fn(() => Book);
}
