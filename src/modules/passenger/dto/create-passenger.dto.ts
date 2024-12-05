import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreatePassengerDto {
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsInt()
  @IsNotEmpty()
  document_id: number;
}