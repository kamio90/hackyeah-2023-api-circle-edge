import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Training extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  companyLogo: string;

  @Prop()
  price: string;

  @Prop()
  link: string;

  @Prop()
  treningDesc: string;
}

export const TrainingSchema = SchemaFactory.createForClass(Training);
