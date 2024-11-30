import { Module } from '@nestjs/common';
import { DataBaseService } from './data-base.service';
import { DataBaseController } from './data-base.controller';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [DataBaseController],
  providers: [DataBaseService, PrismaService, ConfigService],
})
export class DataBaseModule {}
