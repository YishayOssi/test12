import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateAmountDto } from './dto/create-amount.dto';
import { UpdateAmountDto } from './dto/update-amount.dto';
import * as fs from 'fs/promises'

@Injectable()
export class AmountService implements OnModuleInit {
   async onModuleInit() {
    try {
      const data = await fs.readFile("src/amount/budget.txt", 'utf8');
      return data
    } catch (error) {
      return `I was unable to charge the amount`
       ;
    }
  }
}
  


