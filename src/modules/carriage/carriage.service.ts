import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCarriageDto, UpdateCarriageDto } from './dto/carriage.dto';

@Injectable()
export class CarriageService {
  constructor(private prisma: PrismaService) {}

  async create(createCarriageDto: CreateCarriageDto) {
    return this.prisma.carriage.create({
      data: createCarriageDto,
    });
  }

  async findAll() {
    return this.prisma.carriage.findMany();
  }

  async findOne(id: number) {
    return this.prisma.carriage.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCarriageDto: UpdateCarriageDto) {
    return this.prisma.carriage.update({
      where: { id },
      data: updateCarriageDto,
    });
  }

  async remove(id: number) {
    return this.prisma.carriage.delete({
      where: { id },
    });
  }
}