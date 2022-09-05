import { Injectable } from '@nestjs/common';
import { Account } from '@/database/entities/account.entity';
import { AccountRepository } from '@/repositories/account.repository';

@Injectable()
export class ListAccountsService {
  constructor(private accountRepository: AccountRepository) {}
  async list(): Promise<Account[]> {
    return this.accountRepository.find();
  }
}
