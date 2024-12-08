import { IsString, IsNotEmpty, IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLocomotiveDto {
  @ApiProperty({ description: 'Type of locomotive' })
  @IsString()
  @IsNotEmpty()
  locomotive_type: string;

  @ApiProperty({ description: 'Condition of locomotive' })
  @IsString()
  @IsNotEmpty()
  locomotive_condition: string;

  @ApiProperty({ description: 'Date of the last technical inspection' })
  @IsDate()
  @IsNotEmpty()
  last_tech_inspection: Date;

  @ApiProperty({ description: 'ID of the repair brigade' })
  @IsInt()
  @IsNotEmpty()
  repair_brigade_id: number;
}