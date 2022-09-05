import { Account } from './account.interface';

export interface ListAccountsService {
  list(): Promise<Account[]>;
}
