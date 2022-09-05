import { Book } from '../book/book.interface';

export interface Author {
  id: string;
  name: string;
  books?: Book[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
