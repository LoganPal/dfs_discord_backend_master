import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { ServeurService } from './serveur.service';
import { AuthGuard } from 'src/auth.guard';

@Controller('serveur')
export class ServeurController {
  constructor(private readonly serveurService: ServeurService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Request() requete) {
    console.log(requete.user.sub);

    return this.serveurService.findAllPublic();
  }

  @Get('/possede')
  @UseGuards(AuthGuard)
  findAllServerOfUser(@Request() requete) {
    return this.serveurService.findAllServerOfUser(requete.user.sub);
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  async findById(@Param('id') id: string) {
    return this.serveurService.findById(id);
  }

  @Post()
  async create(@Body() createServeurDto: any) {
    return this.serveurService.create(createServeurDto);
  }
}
