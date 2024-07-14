// src/salon/salon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Salon, SalonDocument } from './salon.schema';

@Injectable()
export class SalonService {
  constructor(@InjectModel(Salon.name) private salonModel: Model<SalonDocument>) {}

  async create(createSalonDto: any): Promise<Salon> {
    const createdSalon = new this.salonModel(createSalonDto);
    return createdSalon.save();
  }

  async findByServeurId(serveurId: string): Promise<Salon[]> {
    return this.salonModel.find({ serveurId }).exec();
  }

  async findById(salonId: string): Promise<Salon> {
    return this.salonModel.findById(salonId).exec();
  }
}