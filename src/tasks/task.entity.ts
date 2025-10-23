import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TaskStatus {
  ABERTO = 'aberto',
  FAZENDO = 'fazendo',
  FINALIZADO = 'finalizado',
}

@Entity()
export class Task {
  @ApiProperty({ description: 'Identificador único da tarefa', type: Number, example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Título da tarefa', example: 'Estudar NestJS' })
  @Column()
  title: string;

  @ApiProperty({ description: 'Descrição detalhada da tarefa', example: 'Rever módulos de controllers e providers' })
  @Column()
  description: string;

  @ApiProperty({
    description: 'Status da tarefa',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
    example: TaskStatus.ABERTO,
  })
  @Column({
    type: 'text',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
  })
  status: TaskStatus;

  @ApiProperty({ description: 'Data de criação', type: String, example: '2025-10-23T12:34:56.000Z' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Data da última atualização', type: String, example: '2025-10-23T12:34:56.000Z' })
  @UpdateDateColumn()
  updatedAt: Date;
}
