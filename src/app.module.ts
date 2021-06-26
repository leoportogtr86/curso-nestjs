import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimeiroModule } from './primeiro/primeiro.module';
import { M2Module } from './m2/m2.module';

@Module({
  imports: [PrimeiroModule, M2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
