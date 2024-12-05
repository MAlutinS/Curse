import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTravelSheetDto } from './dto/create-travel_sheet.dto';
import { UpdateTravelSheetDto } from './dto/update-travel_sheet.dto';

@Injectable()
export class TravelSheetService {
  constructor(private prisma: PrismaService) {}

  async create(createTravelSheetDto: CreateTravelSheetDto) {
    return this.prisma.travel_sheet.create({ data: createTravelSheetDto });
  }

  async findAll() {
    return this.prisma.travel_sheet.findMany();
  }

  async findOne(id: number) {
    return this.prisma.travel_sheet.findUnique({ where: { travel_sheet_id: id } });
  }

  async update(id: number, updateTravelSheetDto: UpdateTravelSheetDto) {
    return this.prisma.travel_sheet.update({
      where: { travel_sheet_id: id },
      data: updateTravelSheetDto,
    });
  }

  async remove(id: number) {
    return this.prisma.travel_sheet.delete({ where: { travel_sheet_id: id } });
  }
}