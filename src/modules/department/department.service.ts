import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDepartmentDto} from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    return this.prisma.department.create({
      data: createDepartmentDto,
    });
  }

  async findAll() {
    return this.prisma.department.findMany();
  }

  async findOne(id: number) {
    return this.prisma.department.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return this.prisma.department.update({
      where: { id },
      data: updateDepartmentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.department.delete({
      where: { id },
    });
  }
}