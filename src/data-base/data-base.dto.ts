import { isString, IsString } from "class-validator";

export class DataCreateDto{
    @IsString()
    title: string
    @IsString()
    description: string
}

export type TDataUpdateDto = Partial<DataCreateDto>