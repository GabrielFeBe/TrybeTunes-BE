import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Favorites {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column()
  trackName: string;
  @Column()
  previewUrl: string;
  @Column()
  trackId: number;
}
