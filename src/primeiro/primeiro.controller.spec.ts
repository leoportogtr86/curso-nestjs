import { Test, TestingModule } from '@nestjs/testing';
import { PrimeiroController } from './primeiro.controller';

describe('PrimeiroController', () => {
  let controller: PrimeiroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrimeiroController],
    }).compile();

    controller = module.get<PrimeiroController>(PrimeiroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
