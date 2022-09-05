import { Author } from './author.interface';

export type CreateAuthorInput = Omit<
  Author,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;

export interface CreateAuthorService {
  create(input: CreateAuthorInput): Promise<Author>;
}
