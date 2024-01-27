import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DrinkDocument = HydratedDocument<DrinkSchema>;

@Schema()
export class DrinkSchema {
  @Prop({ required: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  photo: string;

  @Prop()
  description: string;

  @Prop()
  stock: number;

  @Prop({ default: true })
  is_Active: boolean;
}

export const DrinkSchemaEntity = SchemaFactory.createForClass(DrinkSchema);
