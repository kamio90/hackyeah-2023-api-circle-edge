import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UE } from './ue.entity';
import { UEService } from './ue.service';

@Controller('ue')
export class UEController {
  constructor(private readonly ueService: UEService) {}

  @Post()
  async create(@Body() ue: UE): Promise<UE> {
    return this.ueService.create(ue);
  }

  @Get()
  async findAll(): Promise<UE[]> {
    return this.ueService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<UE> {
    return this.ueService.findById(id);
  }
}
