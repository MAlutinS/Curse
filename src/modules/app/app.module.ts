import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { WorkerModule } from '../worker/worker.module';
import { BrigadeModule } from '../brigade/brigade.module';
import { DepartmentModule } from '../department/department.module';
import { LocomotiveModule } from '../locomotive/locomotive.module';
import { TrainModule } from '../train/train.module';
import { WagonModule } from '../wagon/wagon.module';
import { TravelSheetModule } from '../travel_sheet/travel_sheet.module';
import { RouteModule } from '../route/route.module';
import { TicketModule } from '../ticket/ticket.module';
import { PassengerModule } from '../passenger/passenger.module';
import { DocumentModule } from '../document/document.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    WorkerModule,
    BrigadeModule,
    DepartmentModule,
    LocomotiveModule,
    TrainModule,
    WagonModule,
    TravelSheetModule,
    RouteModule,
    TicketModule,
    PassengerModule,
    DocumentModule,
  ],
})
export class AppModule {}