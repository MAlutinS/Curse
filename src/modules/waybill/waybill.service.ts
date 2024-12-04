import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWaybillDto } from './dto/create-waybill.dto';
import { UpdateWaybillDto } from './dto/update-waybill.dto';
@Injectable()
export class WaybillService {
  constructor(private prisma: PrismaService) {}

  async create(createWaybillDto: CreateWaybillDto) {
    return this.prisma.waybill.create({
      data: createWaybillDto,
    });
  }

  async findAll() {
    return this.prisma.waybill.findMany();
  }

  async findOne(id: number) {
    return this.prisma.waybill.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateWaybillDto: UpdateWaybillDto) {
    return this.prisma.waybill.update({
      where: { id },
      data: updateWaybillDto,
    });
  }

  async remove(id: number) {
    return this.prisma.waybill.delete({
      where: { id },
    });
  }
}