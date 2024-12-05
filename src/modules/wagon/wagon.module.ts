import { Module } from '@nestjs/common';
import { WagonService } from './wagon.service';
import { WagonController } from './wagon.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WagonController],
  providers: [WagonService],
})
export class WagonModule {}