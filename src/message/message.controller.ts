// message.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async createMessage(@Body() messageDto: any) {
    return this.messageService.createMessage(messageDto);
  }

  @Get('salon/:salonId')
  async getMessagesBySalon(@Param('salonId') salonId: string) {
    return this.messageService.getMessagesBySalon(salonId);
  }
}