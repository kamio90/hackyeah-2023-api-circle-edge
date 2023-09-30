import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Person extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
