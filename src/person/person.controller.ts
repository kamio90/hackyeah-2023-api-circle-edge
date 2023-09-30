import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Person } from './person.entity';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  async create(@Body() person: Person): Promise<Person> {
    return this.personService.create(person);
  }

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Person> {
    return this.personService.findById(id);
  }
}
