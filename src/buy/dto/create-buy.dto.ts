import { IsString, IsNumber, IsBoolean, min, Min } from 'class-validator';



export class CreateBuyDto {
  @IsString({ message: `Must enter text!`})
  id: string;

  @IsString({ message: `Must enter text!`})
  name: string
  
  @IsString({ message: `Must enter text!`})
  type: string
  
  @IsNumber()
  @Min(1)
  quantity: number

  @IsNumber()
  @Min(1)
  pricePerUnit: number

  @IsBoolean({message: `Please enter a number!`})
  hasImage: boolean = false


}

