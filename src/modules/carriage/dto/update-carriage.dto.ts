import { PartialType } from "@nestjs/mapped-types";
import { CreateCarriageDto } from "./create-carriage.dto";

export class UpdateCarriageDto extends PartialType(CreateCarriageDto) {}