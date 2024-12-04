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
  @IsOptional()
  department_id: number;

  @IsInt()
  @IsOptional()
  team_id?: number;
}
