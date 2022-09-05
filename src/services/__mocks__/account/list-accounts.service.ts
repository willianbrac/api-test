import { Account } from '@/database/entities/__mocks__/account.entity';

export class ListAccountsService {
  list = jest.fn(() => [Account]);
}
