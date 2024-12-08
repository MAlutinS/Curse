import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';

@Injectable()
export class WorkerService {
  constructor(private prisma: PrismaService) {}

  async create(createWorkerDto: CreateWorkerDto) {
    return this.prisma.$transaction(async (prisma) => {
      // Создаем департамент
      const department = await prisma.department.create({
        data: {
          area_work: 'Default Area',
          department_chief_id: 1, // Укажите правильный ID
        },
      });

      // Создаем бригаду
      const brigade = await prisma.brigade.create({
        data: {
          brigade_chief_id: 1, // Укажите правильный ID
          brigade_department_id: department.department_id,
        },
      });

      // Создаем работника
      return prisma.worker.create({
        data: {
          ...createWorkerDto,
          department_id: department.department_id,
          brigade_id: brigade.brigade_id,
        },
      });
    });
  }

  async findAll() {
    return this.prisma.worker.findMany();
  }

  async findOne(id: number) {
    return this.prisma.worker.findUnique({ where: { worker_id: id } });
  }

  async update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.prisma.worker.update({
      where: { worker_id: id },
      data: updateWorkerDto,
    });
  }

  async remove(id: number) {
    return this.prisma.worker.delete({ where: { worker_id: id } });
  }
}