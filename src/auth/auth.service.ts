import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountsService } from 'src/account/accounts.service';

@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.accountsService.findByEmail(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException('invalid credentials');
    }
    const payload = { id: user.id, email: user.email };
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
