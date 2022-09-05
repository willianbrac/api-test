import { Author } from './author.interface';

export type UpdateAuthorInput = Partial<Pick<Author, 'name'>>;

export interface UpdateAuthorService {
  update(id: string, input: UpdateAuthorInput): Promise<Author>;
}
