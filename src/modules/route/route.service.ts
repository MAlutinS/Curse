import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Injectable()
export class RouteService {
  constructor(private prisma: PrismaService) {}

  async create(createRouteDto: CreateRouteDto) {
    return this.prisma.route.create({ data: createRouteDto });
  }

  async findAll() {
    return this.prisma.route.findMany();
  }

  async findOne(id: number) {
    return this.prisma.route.findUnique({ where: { route_id: id } });
  }

  async update(id: number, updateRouteDto: UpdateRouteDto) {
    return this.prisma.route.update({
      where: { route_id: id },
      data: updateRouteDto,
    });
  }

  async remove(id: number) {
    return this.prisma.route.delete({ where: { route_id: id } });
  }
}