import { IsString, IsInt, IsDate, IsNumber } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  ticket_number: string;

  @IsInt()
  train_id: number;

  @IsInt()
  passenger_id: number;

  @IsDate()
  purchase_date: Date;

  @IsInt()
  route_id: number;

  @IsNumber()
  fare: number;
}

export class UpdateTicketDto {
  @IsString()
  ticket_number?: string;

  @IsInt()
  train_id?: number;

  @IsInt()
  passenger_id?: number;

  @IsDate()
  purchase_date?: Date;

  @IsInt()
  route_id?: number;

  @IsNumber()
  fare?: number;
}