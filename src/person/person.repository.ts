import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Person } from './person.entity';

@Injectable()
export class PersonRepository {
  constructor(
    @InjectModel(Person.name) private readonly personModel: Model<Person>,
  ) {}

  async create(person: Person): Promise<Person> {
    const newPerson = new this.personModel(person);
    return newPerson.save();
  }

  async findAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  async findById(id: string): Promise<Person> {
    return this.personModel.findById(id).exec();
  }
}
