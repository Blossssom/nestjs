import { BloxxomService } from './bloxxom.service';
import { Body, Controller, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('bloxxom')
export class BloxxomController {
  constructor(private readonly bloxxomService: BloxxomService) {}

  @Get()
  getAllInfos() {
    return 'all info';
  }

  @Get(':id')
  getInfoById() {
    return 'info by id';
  }

  @Post()
  createInfo() {
    return 'create info';
  }

  @Put(':id')
  updateInfo() {
    return 'update info';
  }

  @Patch(':id')
  updateMoreInfo() {
    return 'update more info';
  }
}
