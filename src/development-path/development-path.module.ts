import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DevelopmentPathController } from './development-path.controller';
import { DevelopmentPathService } from './development-path.service';
import {
  DevelopmentPath,
  DevelopmentPathSchema,
} from './development-path.entity';
import { DevelopmentPathRepository } from './development-path.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DevelopmentPath.name, schema: DevelopmentPathSchema },
    ]),
  ],
  controllers: [DevelopmentPathController],
  providers: [DevelopmentPathService, DevelopmentPathRepository],
  exports: [DevelopmentPathService],
})
export class DevelopmentPathModule {}
