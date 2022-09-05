import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Account } from '@/database/entities/account.entity';
import { ListAccountsService as IListAccountsService } from '@/interfaces/account/list-accounts.interface';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';
import { ListAccountsService } from '@/services/account/list-accounts.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Account)
export class ListAccountsResolver {
  constructor(
    @Inject(ListAccountsService)
    private listAccountsService: IListAccountsService,
  ) {}
  @Query(() => [Account])
  async accounts(): Promise<Account[]> {
    return this.listAccountsService.list();
  }
}
