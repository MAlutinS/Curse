import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';

@Injectable()
export class PassengerService {
  constructor(private prisma: PrismaService) {}

  async create(createPassengerDto: CreatePassengerDto) {
    return this.prisma.$transaction(async (prisma) => {
      // Проверяем, существует ли document_id в таблице Document
      const document = await prisma.document.findUnique({
        where: { document_id: createPassengerDto.document_id },
      });

      if (!document) {
        throw new NotFoundException(`Document with ID ${createPassengerDto.document_id} not found`);
      }

      // Создаем пассажира
      try {
        const passenger = await prisma.passenger.create({
          data: {
            ...createPassengerDto,
            document_id: document.document_id,
          },
        });
        return passenger;
      } catch (error) {
        console.error('Error creating passenger:', error);
        throw new InternalServerErrorException('Failed to create passenger');
      }
    });
  }

  async findAll() {
    return this.prisma.passenger.findMany();
  }

  async findOne(id: number) {
    return this.prisma.passenger.findUnique({ where: { passenger_id: id } });
  }

  async update(id: number, updatePassengerDto: UpdatePassengerDto) {
    return this.prisma.passenger.update({
      where: { passenger_id: id },
      data: updatePassengerDto,
    });
  }

  async remove(id: number) {
    const passenger = await this.prisma.passenger.findUnique({ where: { passenger_id: id } });
    if (!passenger) {
      throw new NotFoundException(`Passenger with ID ${id} not found`);
    }

    return this.prisma.passenger.delete({ where: { passenger_id: id } });
  }
}