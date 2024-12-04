import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { DataCreateDto } from './dto/data-base.dto';
import { ConfigService } from '@nestjs/config';

//@Injectable()
//export class DataBaseService {
    //constructor(private readonly prisma:PrismaService){}

    //findAll(){
        //return this.prisma.user.findMany()
        
        
        
        //return[
        //    {
        //        title: 'Main',
        //        description: 'The strongest one'
        //    },
        //    {
        //        title: 'Second',
        //        description: 'The basic one'
        //    },
        //    {
        //        title: 'Third',
        //        description: 'The smartest one'
        //    }
        //]
    //}

    //create(dto: DataCreateDto){
        //return this.prisma.user.create({
          //  data: dto,
        //})
   // }
//}//
