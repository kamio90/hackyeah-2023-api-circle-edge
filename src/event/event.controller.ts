import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { Event } from './event.entity';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() event: Event): Promise<Event> {
    return this.eventService.create(event);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<Event[]> {
    return this.eventService.findAll(page, limit);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Event> {
    return this.eventService.findById(id);
  }
}
