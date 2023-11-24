import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './account/accounts.module';
import { AuthModule } from './auth/auth.module';
import { Account } from './account/accounts.entity';
import { Favorites } from './favorites/favorites.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'ContactDB',
      type: 'mysql',
      host: 'localhost', // Use the name of the service from docker-compose.yml
      port: 3306, // default port for postgres
      username: 'root',
      password: '123456', // password defined in docker-compose.yml
      entities: [Account, Favorites],
      synchronize: true,
    }),
    AccountsModule,
    AuthModule,
    FavoritesModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
