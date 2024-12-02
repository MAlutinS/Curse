import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDocumentDto, UpdateDocumentDto } from './dto/document.dto';

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService) {}

  async create(createDocumentDto: CreateDocumentDto) {
    return this.prisma.document.create({
      data: createDocumentDto,
    });
  }

  async findAll() {
    return this.prisma.document.findMany();
  }

  async findOne(id: number) {
    return this.prisma.document.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateDocumentDto: UpdateDocumentDto) {
    return this.prisma.document.update({
      where: { id },
      data: updateDocumentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.document.delete({
      where: { id },
    });
  }
}