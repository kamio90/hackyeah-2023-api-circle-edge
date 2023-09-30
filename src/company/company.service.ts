import { Injectable } from '@nestjs/common';
import { Company } from './company.entity';
import { CompanyRepository } from './company.repository';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async create(company: Company): Promise<Company> {
    return this.companyRepository.create(company);
  }

  async findAll(): Promise<Company[]> {
    return this.companyRepository.findAll();
  }

  async findById(id: string): Promise<Company> {
    return this.companyRepository.findById(id);
  }
}
