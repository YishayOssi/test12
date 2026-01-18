import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuyModule } from './buy/buy.module';
import { AmountModule } from './amount/amount.module';

@Module({
  imports: [BuyModule, AmountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
