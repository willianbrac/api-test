import { Book } from './book.interface';

export type UpdateBookInput = Partial<
  Pick<Book, 'title' | 'category' | 'synopsis'>
>;

export interface UpdateBookService {
  update(id: string, input: UpdateBookInput): Promise<Book>;
}
