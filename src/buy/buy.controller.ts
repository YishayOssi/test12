import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuyService } from './buy.service';
import { CreateBuyDto } from './dto/create-buy.dto';
import { UpdateBuyDto } from './dto/update-buy.dto';

@Controller()
export class BuyController {
  constructor(private readonly buyService: BuyService) {}

  @Post("/sale")
  async create(@Body() createBuyDto: CreateBuyDto) {
    const amount = await this.buyService.Amount() 
    const amount2 = Number(amount)
    return this.buyService.buy(amount2, createBuyDto);
  }
}