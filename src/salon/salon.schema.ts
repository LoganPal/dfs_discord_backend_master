import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SalonDocument = Salon & Document;

@Schema()
export class Salon {
  @Prop({ required: true })
  nom: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  serveurId: string;
}

export const SalonSchema = SchemaFactory.createForClass(Salon);