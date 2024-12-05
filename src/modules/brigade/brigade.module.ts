import { Module } from '@nestjs/common';
import { BrigadeService } from './brigade.service';
import { BrigadeController } from './brigade.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BrigadeController],
  providers: [BrigadeService],
})
export class BrigadeModule {}