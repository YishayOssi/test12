import { Injectable } from '@nestjs/common';
import { CreateBuyDto } from './dto/create-buy.dto';
import { UpdateBuyDto } from './dto/update-buy.dto';
import { AmountService } from 'src/amount/amount.service';
import { Amount } from 'src/amount/entities/amount.entity';
import * as fs from 'fs/promises'

@Injectable()
export class BuyService {
  async buy(amount: number, createBuyDto: CreateBuyDto){
    if(amount > createBuyDto.pricePerUnit * createBuyDto.quantity){
      const num = amount - createBuyDto.pricePerUnit * createBuyDto.quantity
      await fs.writeFile(`src/amount/budget.txt`, String(num), 'utf8')

      const data = await fs.readFile("src/buy/items.json", 'utf8')
      const items = JSON.parse(data)
      for(let i = 0; i<items.list.length; i++){
        if(items.list[i].type == createBuyDto.type){
          items.list[i].quantity += createBuyDto.quantity
        }
        else{
          items.list.push(createBuyDto)
        }
      }
      const strToJson = JSON.stringify(items)
      await fs.writeFile(`src/buy/items.json`, strToJson, 'utf8')
      return "The items were sold successfully..."
    } 
    return "The items were not sold!"
  }



  async Amount() {
        try {
          const data = await fs.readFile("src/amount/budget.txt", 'utf8');
          return data
        } catch (error) {
          return `I was unable to charge the amount`
           ;
        }
      }
  }



  // findOne(id: number) {
  //   return `This action returns a #${id} buy`;
  // }

  // update(id: number, updateBuyDto: UpdateBuyDto) {
  //   return `This action updates a #${id} buy`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} buy`;
  // }

