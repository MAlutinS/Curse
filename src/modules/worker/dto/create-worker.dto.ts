import { IsString, IsInt, IsDate, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateWorkerDto {
  @ApiProperty({ description: 'First name of the worker' })
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ description: 'Last name of the worker' })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({ description: 'Position of the worker' })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiPropertyOptional({ description: 'ID of the department' })
  @IsInt()
  @IsOptional()
  department_id?: number;

  @ApiPropertyOptional({ description: 'ID of the brigade' })
  @IsInt()
  @IsOptional()
  brigade_id?: number;

  @ApiProperty({ description: 'Qualification of the worker' })
  @IsString()
  @IsNotEmpty()
  qualification: string;

  @ApiProperty({ description: 'Date of the last medical examination' })
  @IsDate()
  @IsNotEmpty()
  medical_examination: Date;
}