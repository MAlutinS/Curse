import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsInt()
  department_id: number;

  @IsInt()
  head_id: number;
}

export class UpdateTeamDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsInt()
  @IsOptional()
  department_id?: number;

  @IsInt()
  @IsOptional()
  head_id?: number;
}