import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { CityModule } from './city/city.module';
import { PersonModule } from './person/person.module';
import { UEModule } from './ue/ue.module';
import { QuizModule } from './quiz/quiz.module';
import { JobOfferModule } from './job-offer/job-offer.module';
import { TrainingModule } from './trening/trening.module';
import { DevelopmentPathModule } from './development-path/development-path.module';
import { EventModule } from './event/event.module';
import { DiscussionCircleModule } from './discusstion-circle/discusstion-circle.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UserModule,
    CompanyModule,
    CityModule,
    PersonModule,
    UEModule,
    QuizModule,
    JobOfferModule,
    TrainingModule,
    DevelopmentPathModule,
    EventModule,
    DiscussionCircleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
