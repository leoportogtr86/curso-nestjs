import { Test, TestingModule } from '@nestjs/testing';
import { M2Controller } from './m2.controller';

describe('M2Controller', () => {
  let controller: M2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [M2Controller],
    }).compile();

    controller = module.get<M2Controller>(M2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
