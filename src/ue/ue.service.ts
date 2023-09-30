import { Injectable } from '@nestjs/common';
import { UE } from './ue.entity';
import { UERepository } from './ue.repository';

@Injectable()
export class UEService {
  constructor(private readonly ueRepository: UERepository) {}

  async create(ue: UE): Promise<UE> {
    return this.ueRepository.create(ue);
  }

  async findAll(): Promise<UE[]> {
    return this.ueRepository.findAll();
  }

  async findById(id: string): Promise<UE> {
    return this.ueRepository.findById(id);
  }
}
