import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { CityModule } from './city/city.module';
import { PersonModule } from './person/person.module';
import { UEModule } from './ue/ue.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UserModule,
    CompanyModule,
    CityModule,
    PersonModule,
    UEModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
