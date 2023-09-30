import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from './event.entity';

@Injectable()
export class EventRepository {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<Event>,
  ) {}

  async create(event: Event): Promise<Event> {
    const newEvent = new this.eventModel(event);
    return newEvent.save();
  }

  async findAll(page: number, limit: number): Promise<Event[]> {
    return this.eventModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findById(id: string): Promise<Event> {
    return this.eventModel.findById(id).exec();
  }
}
