// src/salon/salon.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SalonService } from './salon.service';

@Controller('salon')
export class SalonController {
  constructor(private readonly salonService: SalonService) {}

  @Post()
  async create(@Body() createSalonDto: any) {
    return this.salonService.create(createSalonDto);
  }

  @Get('/:serveurId')
  async findByServeurId(@Param('serveurId') serveurId: string) {
    return this.salonService.findByServeurId(serveurId);
  }

  @Get('/:salonId')
  async findById(@Param('salonId') salonId: string) {
    return this.salonService.findById(salonId);
  }
}