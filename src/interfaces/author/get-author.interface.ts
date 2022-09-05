import { Author } from './author.interface';

export interface GetAuthorService {
  get(id: string): Promise<Author | null>;
}
