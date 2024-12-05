import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWagonDto } from './dto/create-wagon.dto';
import { UpdateWagonDto } from './dto/update-wagon.dto';

@Injectable()
export class WagonService {
  constructor(private prisma: PrismaService) {}

  async create(createWagonDto: CreateWagonDto) {
    return this.prisma.wagon.create({ data: createWagonDto });
  }

  async findAll() {
    return this.prisma.wagon.findMany();
  }

  async findOne(id: number) {
    return this.prisma.wagon.findUnique({ where: { wagon_id: id } });
  }

  async update(id: number, updateWagonDto: UpdateWagonDto) {
    return this.prisma.wagon.update({
      where: { wagon_id: id },
      data: updateWagonDto,
    });
  }

  async remove(id: number) {
    return this.prisma.wagon.delete({ where: { wagon_id: id } });
  }
}