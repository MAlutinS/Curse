import { Module } from '@nestjs/common';
import { LuggageService } from './luggage.service';
import { LuggageController } from './luggage.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LuggageController],
  providers: [LuggageService],
})
export class LuggageModule {}