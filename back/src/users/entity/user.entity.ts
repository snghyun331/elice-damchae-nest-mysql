import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Mbti } from './common/user.enums';

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

  @Column({ type: 'varchar' })
  profileImg: string;

  @Column({ type: 'varchar' })
  mbtiImg: string;

  @Column({ type: 'boolean', default: false, nullable: false })
  isOut: boolean;

  @Column({ type: 'boolean', default: false, nullable: false })
  isGoogleLogin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
