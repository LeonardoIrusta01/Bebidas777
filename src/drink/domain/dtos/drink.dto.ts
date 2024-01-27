import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class DrinkBodyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  photo: string;

  @IsNotEmpty()
  @IsString()
  decription: string;

  @IsNotEmpty()
  @IsNumber()
  stock: number;
}

export class DrinkDto extends DrinkBodyDto {
  @IsNotEmpty()
  @IsBoolean()
  is_Active: boolean;
}

export class DrinkUpdateDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  photo: string;

  @IsOptional()
  @IsString()
  decription: string;

  @IsOptional()
  @IsNumber()
  stock: number;

  @IsOptional()
  @IsBoolean()
  is_Active: boolean;
}
