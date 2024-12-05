import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';

@Injectable()
export class WorkerService {
  constructor(private prisma: PrismaService) {}

  async create(createWorkerDto: CreateWorkerDto) {
    return this.prisma.worker.create({ data: createWorkerDto });
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