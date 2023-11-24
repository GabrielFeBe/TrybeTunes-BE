import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountDto } from './account.validator';

@Controller('accounts')
@UsePipes(new ValidationPipe())
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() accountt: AccountDto) {
    const response = await this.accountsService.create(accountt);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = response;
    return rest;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() { id }: { id: string }) {
    const response = await this.accountsService.findOne(Number(id));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = response;
    return rest;
  }
}
