import { Module } from '@nestjs/common';
import { turbineService } from './turbine.service';
import { MongooseModule } from '@nestjs/mongoose';
import { turbineSchema } from './turbine.model';
import { turbineController } from './turbine.controller';

@Module({
  //imports: [ProductModule],
   imports: [MongooseModule.forFeature([{ name: 'turbine', schema: turbineSchema }])],
  controllers: [turbineController],
  providers: [turbineService]
})
export class TurbineModule { }