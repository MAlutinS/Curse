import { IsString, IsInt,IsNotEmpty, IsOptional } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  head_id: number;

  @IsString()
  @IsNotEmpty()
  work_scope: string;
}

