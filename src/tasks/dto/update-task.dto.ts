import { IsString, IsEnum, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '../task.entity';

export class UpdateTaskDto {
  @ApiPropertyOptional({
    description: 'Título da tarefa',
    example: 'Estudar NestJS',
    minLength: 3,
    maxLength: 100,
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({
    description: 'Descrição detalhada da tarefa',
    example: 'Rever módulos de controllers e providers',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'Status da tarefa',
    enum: TaskStatus,
    example: TaskStatus.ABERTO,
  })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
}
