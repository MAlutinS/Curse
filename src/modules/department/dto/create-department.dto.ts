import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  area_work: string;

  @IsInt()
  @IsNotEmpty()
  department_chief_id: number;
}