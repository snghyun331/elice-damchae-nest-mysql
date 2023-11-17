import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Image')
export class ImageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  path: string;
}
