// message.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './message.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async createMessage(messageDto: any): Promise<Message> {
    const createdMessage = new this.messageModel(messageDto);
    return createdMessage.save();
  }

  async getMessagesBySalon(salonId: string): Promise<Message[]> {
    return this.messageModel.find({ salon: salonId }).exec();
  }
}