import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return this.prisma.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll() {
    return this.prisma.employee.findMany();
  }

  async findOne(id: number) {
    return this.prisma.employee.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.prisma.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return this.prisma.employee.delete({
      where: { id },
    });
  }
}