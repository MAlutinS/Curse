import { Module } from '@nestjs/common';
import { CarriageService } from './carriage.service';
import { CarriageController } from './carriage.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CarriageController],
  providers: [CarriageService],
})
export class CarriageModule {}