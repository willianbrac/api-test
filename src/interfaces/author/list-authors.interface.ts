import { Author } from './author.interface';

export interface ListAuthorsService {
  list(): Promise<Author[]>;
}
