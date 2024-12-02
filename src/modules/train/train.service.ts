import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTrainDto, UpdateTrainDto } from './dto/train.dto';

@Injectable()
export class TrainService {
  constructor(private prisma: PrismaService) {}

  async create(createTrainDto: CreateTrainDto) {
    return this.prisma.train.create({
      data: createTrainDto,
    });
  }

  async findAll() {
    return this.prisma.train.findMany();
  }

  async findOne(id: number) {
    return this.prisma.train.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateTrainDto: UpdateTrainDto) {
    return this.prisma.train.update({
      where: { id },
      data: updateTrainDto,
    });
  }

  async remove(id: number) {
    return this.prisma.train.delete({
      where: { id },
    });
  }
}