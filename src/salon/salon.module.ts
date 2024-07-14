// src/salon/salon.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalonService } from './salon.service';
import { SalonController } from './salon.controller';
import { Salon, SalonSchema } from './salon.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Salon.name, schema: SalonSchema }])],
  providers: [SalonService],
  controllers: [SalonController],
})
export class SalonModule {}