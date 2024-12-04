import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePassengerDto} from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
@Injectable()
export class PassengerService {
  constructor(private prisma: PrismaService) {}

  async create(createPassengerDto: CreatePassengerDto) {
    return this.prisma.passenger.create({
      data: createPassengerDto,
    });
  }

  async findAll() {
    return this.prisma.passenger.findMany();
  }

  async findOne(id: number) {
    return this.prisma.passenger.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatePassengerDto: UpdatePassengerDto) {
    return this.prisma.passenger.update({
      where: { id },
      data: updatePassengerDto,
    });
  }

  async remove(id: number) {
    return this.prisma.passenger.delete({
      where: { id },
    });
  }
}