import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLocomotiveDto, UpdateLocomotiveDto } from './dto/locomotive.dto';

@Injectable()
export class LocomotiveService {
  constructor(private prisma: PrismaService) {}

  async create(createLocomotiveDto: CreateLocomotiveDto) {
    return this.prisma.locomotive.create({
      data: createLocomotiveDto,
    });
  }

  async findAll() {
    return this.prisma.locomotive.findMany();
  }

  async findOne(id: number) {
    return this.prisma.locomotive.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateLocomotiveDto: UpdateLocomotiveDto) {
    return this.prisma.locomotive.update({
      where: { id },
      data: updateLocomotiveDto,
    });
  }

  async remove(id: number) {
    return this.prisma.locomotive.delete({
      where: { id },
    });
  }
}