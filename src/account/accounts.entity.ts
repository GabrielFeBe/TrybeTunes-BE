import { Favorites } from 'src/favorites/favorites.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'text' })
  image: string;
  @OneToMany(() => Favorites, (favorites) => favorites.account, {
    eager: true,
    cascade: true,
  })
  favorites: Favorites[];
}
