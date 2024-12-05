import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    return this.prisma.department.create({ data: createDepartmentDto });
  }

  async findAll() {
    return this.prisma.department.findMany();
  }

  async findOne(id: number) {
    return this.prisma.department.findUnique({ where: { department_id: id } });
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return this.prisma.department.update({
      where: { department_id: id },
      data: updateDepartmentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.department.delete({ where: { department_id: id } });
  }
}