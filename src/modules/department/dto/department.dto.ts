import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  name: string;

  @IsInt()
  head_id: number;

  @IsString()
  work_scope: string;
}

export class UpdateDepartmentDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsInt()
  @IsOptional()
  head_id?: number;

  @IsString()
  @IsOptional()
  work_scope?: string;
}