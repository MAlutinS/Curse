import { IsString, IsInt, IsDate, IsOptional } from 'class-validator';

export class CreateLocomotiveDto {
  @IsString()
  type: string;

  @IsString()
  condition: string;

  @IsDate()
  annual_inspection_date: Date;

  @IsInt()
  inspection_team_id: number;
}

export class UpdateLocomotiveDto {
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  condition?: string;

  @IsOptional()
  @IsDate()
  annual_inspection_date?: Date;

  @IsOptional()
  @IsInt()
  inspection_team_id?: number;
}