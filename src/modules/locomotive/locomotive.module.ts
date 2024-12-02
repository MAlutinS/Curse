import { Module } from '@nestjs/common';
import { LocomotiveService } from './locomotive.service';
import { LocomotiveController } from './locomotive.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LocomotiveController],
  providers: [LocomotiveService],
})
export class LocomotiveModule {}