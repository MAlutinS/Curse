import { Module } from '@nestjs/common';
import { TravelSheetService } from './travel_sheet.service';
import { TravelSheetController } from './travel_sheet.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TravelSheetController],
  providers: [TravelSheetService],
})
export class TravelSheetModule {}