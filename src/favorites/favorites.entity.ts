import { Account } from 'src/account/accounts.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Favorites {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  accountId: number;
  @Column()
  trackName: string;
  @Column()
  previewUrl: string;
  @Column()
  trackId: number;
  @ManyToOne(() => Account, (account) => account.favorites)
  account: Account;
}
