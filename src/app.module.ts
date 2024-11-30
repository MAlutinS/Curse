import { Module } from '@nestjs/common';
import { DataBaseModule } from './data-base/data-base.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }) ,DataBaseModule],
})
export class AppModule {}
