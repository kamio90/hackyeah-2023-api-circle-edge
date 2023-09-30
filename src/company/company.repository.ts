import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './company.entity';

@Injectable()
export class CompanyRepository {
  constructor(
    @InjectModel(Company.name) private readonly companyModel: Model<Company>,
  ) {}

  async create(company: Company): Promise<Company> {
    const newCompany = new this.companyModel(company);
    return newCompany.save();
  }

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async findById(id: string): Promise<Company> {
    return this.companyModel.findById(id).exec();
  }
}
