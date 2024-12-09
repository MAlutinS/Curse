import { IsString, IsInt, IsDate, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLocomotiveDto {
  @ApiProperty({ description: 'Type of the locomotive' })
  @IsString()
  @IsNotEmpty()
  locomotive_type: string;

  @ApiProperty({ description: 'Condition of the locomotive' })
  @IsString()
  @IsNotEmpty()
  locomotive_condition: string;

  @ApiProperty({ description: 'Date of the last technical inspection' })
  @IsDate()
  @IsNotEmpty()
  last_tech_inspection: Date;

  @ApiPropertyOptional({ description: 'ID of the repair brigade' })
  @IsInt()
  @IsOptional()
  repair_brigade_id?: number;
}