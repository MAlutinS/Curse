import { IsString, IsDate } from 'class-validator';

export class CreateDocumentDto {
  @IsString()
  document_number: string;

  @IsString()
  series: string;

  @IsDate()
  issue_date: Date;
}

export class UpdateDocumentDto {
  @IsString()
  document_number?: string;

  @IsString()
  series?: string;

  @IsDate()
  issue_date?: Date;
}