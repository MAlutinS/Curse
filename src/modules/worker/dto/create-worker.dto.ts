import { IsString, IsNotEmpty, IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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

  @ApiProperty({ description: 'ID of the department' })
  @IsInt()
  @IsNotEmpty()
  department_id: number;

  @ApiProperty({ description: 'ID of the brigade' })
  @IsInt()
  @IsNotEmpty()
  brigade_id: number;

  @ApiProperty({ description: 'Qualification of the worker' })
  @IsString()
  @IsNotEmpty()
  qualification: string;

  @ApiProperty({ description: 'Date of the last medical examination' })
  @IsDate()
  @IsNotEmpty()
  medical_examination: Date;
}