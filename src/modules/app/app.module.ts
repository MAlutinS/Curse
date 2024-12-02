import { Module } from '@nestjs/common';
import { DataBaseModule } from '../data-base/data-base.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { TeamModule } from '../team/team.module';
import { DepartmentModule } from '../department/department.module';
import { EmployeeModule } from '../employee/employee.module';
import { TrainModule } from '../train/train.module';
import { LocomotiveModule } from '../locomotive/locomotive.module';
import { CarriageModule } from '../carriage/carriage.module';
import { WaybillModule } from '../waybill/waybill.module';
import { LuggageModule } from '../luggage/luggage.module';
import { RouteModule } from '../route/route.module';
import { PassengerModule } from '../passenger/passenger.module';
import { TicketModule } from '../ticket/ticket.module';
import { CashierModule } from '../cashier/cashier.module';
import { DocumentModule } from '../document/document.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }) ,DataBaseModule, PrismaModule, TeamModule,
  DepartmentModule, EmployeeModule, TrainModule,
  LocomotiveModule, CarriageModule, WaybillModule,
  LuggageModule, RouteModule, PassengerModule,
  TicketModule, CashierModule, DocumentModule
],
})
export class AppModule {}
