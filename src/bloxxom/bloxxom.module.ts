import { Module } from '@nestjs/common';
import { BloxxomController } from './bloxxom.controller';
import { BloxxomService } from './bloxxom.service';

@Module({
  controllers: [BloxxomController],
  providers: [BloxxomService],
  exports: [BloxxomService],
})
export class BloxxomModule {}
