// serveur.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Serveur' })
  serveur: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Salon' })
  salon: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  contenu: string;

  @Prop({ default: Date.now })
  dateCreation: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);