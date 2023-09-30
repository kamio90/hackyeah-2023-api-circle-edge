import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UE } from './ue.entity';

@Injectable()
export class UERepository {
  constructor(@InjectModel(UE.name) private readonly ueModel: Model<UE>) {}

  async create(ue: UE): Promise<UE> {
    const newUE = new this.ueModel(ue);
    return newUE.save();
  }

  async findAll(): Promise<UE[]> {
    return this.ueModel.find().exec();
  }

  async findById(id: string): Promise<UE> {
    return this.ueModel.findById(id).exec();
  }
}
