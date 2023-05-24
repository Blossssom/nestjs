import { PositiveIntPipe } from 'src/pipes/positiveInt.pipe';
import { BloxxomService } from './bloxxom.service';
import {
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
@Controller('bloxxom')
export class BloxxomController {
  constructor(private readonly bloxxomService: BloxxomService) {}

  @Get(':id')
  getAllInfos(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
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
