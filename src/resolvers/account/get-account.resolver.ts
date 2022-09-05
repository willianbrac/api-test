import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Account } from '@/database/entities/account.entity';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';
import { GetAccountService as IGetAccountService } from '@/interfaces/account/get-account.interface';
import { GetAccountService } from '@/services/account/get-account.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Account)
export class GetAccountResolver {
  constructor(
    @Inject(GetAccountService) private getAccountService: IGetAccountService,
  ) {}
  @Query(() => Account, { nullable: true })
  async account(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Account | undefined> {
    return this.getAccountService.Get(id);
  }
}
