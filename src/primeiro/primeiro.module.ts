import { Module } from '@nestjs/common';
import { PrimeiroController } from './primeiro.controller';

@Module({
  controllers: [PrimeiroController]
})
export class PrimeiroModule {}
