import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRouteDto, UpdateRouteDto } from './dto/route.dto';

@Injectable()
export class RouteService {
  constructor(private prisma: PrismaService) {}

  async create(createRouteDto: CreateRouteDto) {
    return this.prisma.route.create({
      data: createRouteDto,
    });
  }

  async findAll() {
    return this.prisma.route.findMany();
  }

  async findOne(id: number) {
    return this.prisma.route.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateRouteDto: UpdateRouteDto) {
    return this.prisma.route.update({
      where: { id },
      data: updateRouteDto,
    });
  }

  async remove(id: number) {
    return this.prisma.route.delete({
      where: { id },
    });
  }
}