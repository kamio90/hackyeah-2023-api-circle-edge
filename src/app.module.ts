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
import { PointModule } from './point/point.module';
import { ProjectModule } from './project/project.module';
import { NewsFeedModule } from './news-feed/news-feed.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
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
    PointModule,
    ProjectModule,
    NewsFeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
