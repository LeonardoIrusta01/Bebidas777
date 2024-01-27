import { Module } from '@nestjs/common';
import { DrinkController } from './infrastructure/nest/controllers/Drink.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [DrinkController],
  exports: [],
})
export class DrinkModule {}
