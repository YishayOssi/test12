import { Module } from '@nestjs/common';
import { AmountService } from './amount.service';
import { AmountController } from './amount.controller';

@Module({
  controllers: [AmountController],
  providers: [AmountService],
})
export class AmountModule {}
