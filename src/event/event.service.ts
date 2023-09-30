import { Injectable } from '@nestjs/common';
import { Event } from './event.entity';
import { EventRepository } from './event.repository';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}

  async create(event: Event): Promise<Event> {
    return this.eventRepository.create(event);
  }

  async findAll(page: number, limit: number): Promise<Event[]> {
    return this.eventRepository.findAll(page, limit);
  }

  async findById(id: string): Promise<Event> {
    return this.eventRepository.findById(id);
  }
}
