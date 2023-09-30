import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './city.entity';

@Injectable()
export class CityRepository {
  constructor(
    @InjectModel(City.name) private readonly cityModel: Model<City>,
  ) {}

  async create(city: City): Promise<City> {
    const newCity = new this.cityModel(city);
    return newCity.save();
  }

  async findAll(): Promise<City[]> {
    return this.cityModel.find().exec();
  }

  async findById(id: string): Promise<City> {
    return this.cityModel.findById(id).exec();
  }
}
