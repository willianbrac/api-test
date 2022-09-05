import { Author } from '@/database/entities/__mocks__/author.entity';
export class CreateAuthorService {
  create = jest.fn(() => Author);
}
