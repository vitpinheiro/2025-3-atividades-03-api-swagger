import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '../task.entity';
import { IsString, IsOptional, IsEnum, Length } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Título da tarefa',
    example: 'Estudar NestJS',
    minLength: 3,
    maxLength: 100,
  })
  @IsString()
  @Length(3, 100)
  title: string;

  @ApiProperty({
    description: 'Descrição detalhada da tarefa',
    example: 'Rever módulos de controllers e providers',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Status inicial da tarefa',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
    example: TaskStatus.ABERTO,
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}