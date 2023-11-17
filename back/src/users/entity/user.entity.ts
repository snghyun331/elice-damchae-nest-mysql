import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Mbti } from './common/user.enums';
import { ImageEntity } from 'src/images/entity/image.entity';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'enum', enum: Mbti, nullable: false })
  mbti: Mbti;

  @Column({ type: 'varchar', unique: true, nullable: false })
  nickname: string;

  @Column({ type: 'varchar', nullable: true })
  mbtiImg?: string;

  @Column({ type: 'boolean', default: false, nullable: false })
  isOut: boolean;

  @Column({ type: 'boolean', default: false, nullable: false })
  isGoogleLogin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => ImageEntity, { nullable: true })
  @JoinColumn({ name: 'profileImg' })
  profileImg?: ImageEntity;
}
