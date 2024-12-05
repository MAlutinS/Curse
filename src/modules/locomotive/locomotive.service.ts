import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLocomotiveDto } from './dto/create-locomotive.dto';
import { UpdateLocomotiveDto } from './dto/update-locomotive.dto';

@Injectable()
export class LocomotiveService {
  constructor(private prisma: PrismaService) {}

  async create(createLocomotiveDto: CreateLocomotiveDto) {
    return this.prisma.locomotive.create({ data: createLocomotiveDto });
  }

  async findAll() {
    return this.prisma.locomotive.findMany();
  }

  async findOne(id: number) {
    return this.prisma.locomotive.findUnique({ where: { locomotive_id: id } });
  }

  async update(id: number, updateLocomotiveDto: UpdateLocomotiveDto) {
    return this.prisma.locomotive.update({
      where: { locomotive_id: id },
      data: updateLocomotiveDto,
    });
  }

  async remove(id: number) {
    return this.prisma.locomotive.delete({ where: { locomotive_id: id } });
  }
}