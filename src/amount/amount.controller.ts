import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmountService } from './amount.service';
import { CreateAmountDto } from './dto/create-amount.dto';
import { UpdateAmountDto } from './dto/update-amount.dto';

@Controller('amount')
export class AmountController {
  constructor(private readonly amountService: AmountService) {}

}