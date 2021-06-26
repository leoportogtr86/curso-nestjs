import { Module } from '@nestjs/common';
import { M2Controller } from './m2.controller';

@Module({
  controllers: [M2Controller]
})
export class M2Module {}
