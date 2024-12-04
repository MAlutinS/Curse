import { IsString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  department_id: number;

  @IsInt()
  @IsNotEmpty()
  head_id: number;
}
