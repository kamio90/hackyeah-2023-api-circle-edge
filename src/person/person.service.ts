import { Injectable } from '@nestjs/common';
import { Person } from './person.entity';
import { PersonRepository } from './person.repository';

@Injectable()
export class PersonService {
  constructor(private readonly personRepository: PersonRepository) {}

  async create(person: Person): Promise<Person> {
    return this.personRepository.create(person);
  }

  async findAll(): Promise<Person[]> {
    return this.personRepository.findAll();
  }

  async findById(id: string): Promise<Person> {
    return this.personRepository.findById(id);
  }
}
