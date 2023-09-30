import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UEController } from './ue.controller';
import { UEService } from './ue.service';
import { UE, UESchema } from './ue.entity';
import { UERepository } from './ue.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: UE.name, schema: UESchema }])],
  controllers: [UEController],
  providers: [UEService, UERepository],
  exports: [UEService],
})
export class UEModule {}
