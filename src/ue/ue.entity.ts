import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UE extends Document {
  @Prop()
  name: string;

  @Prop()
  country: string;
}

export const UESchema = SchemaFactory.createForClass(UE);
