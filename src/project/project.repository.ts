import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './project.entity';

@Injectable()
export class ProjectRepository {
  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}

  async create(project: Project): Promise<Project> {
    const newProject = new this.projectModel(project);
    return newProject.save();
  }

  async findAll(page: number, limit: number): Promise<Project[]> {
    return this.projectModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findById(id: string): Promise<Project> {
    return this.projectModel.findById(id).exec();
  }
}
