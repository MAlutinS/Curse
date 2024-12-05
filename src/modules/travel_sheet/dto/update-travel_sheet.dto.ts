import { PartialType } from "@nestjs/mapped-types";
import { CreateTravelSheetDto } from "./create-travel_sheet.dto";

export class UpdateTravelSheetDto extends PartialType(CreateTravelSheetDto) {}