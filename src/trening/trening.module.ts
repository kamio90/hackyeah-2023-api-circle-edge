import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Training, TrainingSchema } from './trening.entity';
import { TrainingController } from './trening.controller';
import { TrainingService } from './trening.service';
import { TrainingRepository } from './trening.repository';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Training.name, schema: TrainingSchema },
    ]),
  ],
  controllers: [TrainingController],
  providers: [TrainingService, TrainingRepository],
  exports: [TrainingService],
})
export class TrainingModule {}
