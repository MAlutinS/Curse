import { IsString, IsInt, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

export class CreateLocomotiveDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  condition: string;

  @IsDate()
  @IsNotEmpty()
  annual_inspection_date: Date;

  @IsInt()
  @IsNotEmpty()
  inspection_team_id: number;
}
