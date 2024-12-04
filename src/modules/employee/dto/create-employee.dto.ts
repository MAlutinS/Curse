import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsString()
  @IsNotEmpty()
  employee_number: string;

  @IsInt()
  @IsNotEmpty()
  department_id: number;

  @IsOptional()
  @IsInt()
  team_id?: number;
}
