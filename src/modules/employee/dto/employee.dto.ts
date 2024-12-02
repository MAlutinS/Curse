import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsString()
  position: string;

  @IsString()
  employee_number: string;

  @IsInt()
  department_id: number;

  @IsOptional()
  @IsInt()
  team_id?: number;
}

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  position?: string;

  @IsOptional()
  @IsString()
  employee_number?: string;

  @IsOptional()
  @IsInt()
  department_id?: number;

  @IsOptional()
  @IsInt()
  team_id?: number;
}