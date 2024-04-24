import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TurbineModule } from './turbine/turbine.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TurbineModule, 
    MongooseModule.forRoot("mongodb+srv://noah:uyWR4Z4ntzePcUEHFnbA@cluster0.rcccf56.mongodb.net/gtnh-database")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}