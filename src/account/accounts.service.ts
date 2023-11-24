import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './accounts.entity';
import { Repository } from 'typeorm';
import { AccountDto } from './account.validator';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  async findOne(id: number): Promise<Account | null> {
    const response: Account | null = await this.accountsRepository.findOne({
      where: { id },
    });
    response.favorites = response.favorites.filter(
      (favMusic) => Number(favMusic.userId) === id,
    );
    return response;
  }

  async findByEmail(email: string): Promise<Account | null> {
    const response: Account | null = await this.accountsRepository.findOne({
      where: { email },
    });
    if (!response) throw new NotFoundException('Account not found');
    return response;
  }

  async create(account: AccountDto): Promise<Account> {
    return await this.accountsRepository.save(account);
  }
}
