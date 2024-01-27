import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DrinkSchema } from 'src/database/schemas';
import { DrinkModel } from 'src/drink/domain/models/Drink.model';
import { DrinkDto, DrinkUpdateDto } from 'src/drink/domain/dtos/drink.dto';

@Injectable()
export class DrinkRepository {
  constructor(
    @InjectModel('DrinkSchema')
    private readonly drinkModel: Model<DrinkSchema>,
  ) {}

  async create(drink: DrinkDto): Promise<DrinkModel> {
    try {
      return await this.drinkModel.create(drink);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(drink: DrinkUpdateDto, id: string): Promise<DrinkModel> {
    try {
      const updated = await this.drinkModel.findByIdAndUpdate(id, drink);

      if (updated) {
        return updated;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findOneById(id: string): Promise<DrinkModel> {
    try {
      const result = await this.drinkModel.findById(id);

      if (result) {
        return result;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
