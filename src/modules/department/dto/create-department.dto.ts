import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateDepartmentDto {
  @ApiProperty({ description: 'Area of work' })
  @IsString()
  @IsNotEmpty()
  area_work: string;

  @ApiProperty({ description: 'Id of the department chief' })
  @IsInt()
  @IsNotEmpty()
  department_chief_id: number;
}