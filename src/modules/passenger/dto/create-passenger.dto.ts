import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePassengerDto {
  @ApiProperty({ description: 'First name of the passenger' })
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ description: 'Last name of the passenger' })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({ description: 'ID of the document' })
  @IsInt()
  @IsNotEmpty()
  document_id: number;
}