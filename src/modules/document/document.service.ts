import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService) {}

  async create(createDocumentDto: CreateDocumentDto) {
    return this.prisma.document.create({ data: createDocumentDto });
  }

  async findAll() {
    return this.prisma.document.findMany();
  }

  async findOne(id: number) {
    return this.prisma.document.findUnique({ where: { document_id: id } });
  }

  async update(id: number, updateDocumentDto: UpdateDocumentDto) {
    return this.prisma.document.update({
      where: { document_id: id },
      data: updateDocumentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.document.delete({ where: { document_id: id } });
  }
}