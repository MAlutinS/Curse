import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    ParseIntPipe,
  } from '@nestjs/common';
  import { DocumentService } from './document.service';
  import { CreateDocumentDto, UpdateDocumentDto } from './dto/document.dto';
  
  @Controller('documents')
  export class DocumentController {
    constructor(private readonly documentService: DocumentService) {}
  
    @Post()
    create(@Body() createDocumentDto: CreateDocumentDto) {
      return this.documentService.create(createDocumentDto);
    }
  
    @Get()
    findAll() {
      return this.documentService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.documentService.findOne(id);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateDocumentDto: UpdateDocumentDto,
    ) {
      return this.documentService.update(id, updateDocumentDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.documentService.remove(id);
    }
  }