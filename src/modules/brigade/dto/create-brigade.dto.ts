import { IsInt, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBrigadeDto {
  @ApiPropertyOptional({ description: 'ID of the brigade chief' })
  @IsInt()
  @IsOptional()
  brigade_chief_id?: number;

  @ApiPropertyOptional({ description: 'ID of the brigade department' })
  @IsInt()
  @IsOptional()
  brigade_department_id?: number;
}