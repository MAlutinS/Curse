import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';

@Injectable()
export class TrainService {
  constructor(private prisma: PrismaService) {}

  async create(createTrainDto: CreateTrainDto) {
    return this.prisma.train.create({ data: createTrainDto });
  }

  async findAll() {
    return this.prisma.train.findMany();
  }

  async findOne(id: number) {
    return this.prisma.train.findUnique({ where: { train_id: id } });
  }

  async update(id: number, updateTrainDto: UpdateTrainDto) {
    return this.prisma.train.update({
      where: { train_id: id },
      data: updateTrainDto,
    });
  }

  async remove(id: number) {
    return this.prisma.train.delete({ where: { train_id: id } });
  }
}