import { Injectable } from '@nestjs/common';
import { City } from './city.entity';
import { CityRepository } from './city.repository';

@Injectable()
export class CityService {
  constructor(private readonly cityRepository: CityRepository) {}

  async create(city: City): Promise<City> {
    return this.cityRepository.create(city);
  }

  async findAll(): Promise<City[]> {
    return this.cityRepository.findAll();
  }

  async findById(id: string): Promise<City> {
    return this.cityRepository.findById(id);
  }
}
