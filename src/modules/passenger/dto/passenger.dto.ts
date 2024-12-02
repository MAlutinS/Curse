import { IsString, IsInt } from 'class-validator';

export class CreatePassengerDto {
  @IsString()
  name: string;

  @IsInt()
  document_id: number;

  @IsString()
  gender: string;
}

export class UpdatePassengerDto {
  @IsString()
  name?: string;

  @IsInt()
  document_id?: number;

  @IsString()
  gender?: string;
}