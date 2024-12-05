import { IsInt, IsNotEmpty, IsDate, IsString } from 'class-validator';

export class CreateDocumentDto {
  @IsInt()
  @IsNotEmpty()
  document_series: number;

  @IsInt()
  @IsNotEmpty()
  document_number: number;

  @IsDate()
  @IsNotEmpty()
  document_issue_date: Date;

  @IsString()
  @IsNotEmpty()
  gender: string;
}