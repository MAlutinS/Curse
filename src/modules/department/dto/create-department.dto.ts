import { IsString, IsInt, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDepartmentDto {
  @ApiProperty({ description: 'Area of work' })
  @IsString()
  @IsNotEmpty()
  area_work: string;

  @ApiPropertyOptional({ description: 'ID of the department chief' })
  @IsInt()
  @IsOptional()
  department_chief_id?: number;
}