import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsFeedService } from './news-feed.service';
import { NewsFeed, NewsFeedSchema } from './news-feed.entity';
import { NewsFeedRepository } from './news-feed.repository';
import { NewsFeedController } from './news-feed.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NewsFeed.name, schema: NewsFeedSchema },
    ]),
  ],
  controllers: [NewsFeedController],
  providers: [NewsFeedService, NewsFeedRepository],
  exports: [NewsFeedService],
})
export class NewsFeedModule {}
