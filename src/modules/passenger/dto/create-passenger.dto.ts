import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreatePassengerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  document_id: number;

  @IsString()
  @IsNotEmpty()
  gender: string;
}
