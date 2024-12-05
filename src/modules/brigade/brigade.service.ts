import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBrigadeDto } from './dto/create-brigade.dto';
import { UpdateBrigadeDto } from './dto/update-brigade.dto';

@Injectable()
export class BrigadeService {
  constructor(private prisma: PrismaService) {}

  async create(createBrigadeDto: CreateBrigadeDto) {
    return this.prisma.brigade.create({ data: createBrigadeDto });
  }

  async findAll() {
    return this.prisma.brigade.findMany();
  }

  async findOne(id: number) {
    return this.prisma.brigade.findUnique({ where: { brigade_id: id } });
  }

  async update(id: number, updateBrigadeDto: UpdateBrigadeDto) {
    return this.prisma.brigade.update({
      where: { brigade_id: id },
      data: updateBrigadeDto,
    });
  }

  async remove(id: number) {
    return this.prisma.brigade.delete({ where: { brigade_id: id } });
  }
}