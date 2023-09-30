import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Company extends Document {
  @Prop()
  name: string;

  @Prop()
  address: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
