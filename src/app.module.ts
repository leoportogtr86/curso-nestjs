import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimeiroModule } from './primeiro/primeiro.module';

@Module({
  imports: [PrimeiroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
