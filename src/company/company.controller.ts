import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Company } from './company.entity';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body() company: Company): Promise<Company> {
    return this.companyService.create(company);
  }

  @Get()
  async findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Company> {
    return this.companyService.findById(id);
  }
}
