import { Author } from '../author/author.interface';

export interface Book {
  id: string;
  title: string;
  author: Author;
  category: string;
  synopsis: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
