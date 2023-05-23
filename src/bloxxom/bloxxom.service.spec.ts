import { Test, TestingModule } from '@nestjs/testing';
import { BloxxomService } from './bloxxom.service';

describe('BloxxomService', () => {
  let service: BloxxomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloxxomService],
    }).compile();

    service = module.get<BloxxomService>(BloxxomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
