import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLuggageDto} from './dto/create-luggage.dto';
import { UpdateLuggageDto } from './dto/update-luggage.dto';
@Injectable()
export class LuggageService {
  constructor(private prisma: PrismaService) {}

  async create(createLuggageDto: CreateLuggageDto) {
    return this.prisma.luggage.create({
      data: createLuggageDto,
    });
  }

  async findAll() {
    return this.prisma.luggage.findMany();
  }

  async findOne(id: number) {
    return this.prisma.luggage.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateLuggageDto: UpdateLuggageDto) {
    return this.prisma.luggage.update({
      where: { id },
      data: updateLuggageDto,
    });
  }

  async remove(id: number) {
    return this.prisma.luggage.delete({
      where: { id },
    });
  }
}