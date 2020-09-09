import { Module } from '@nestjs/common';

import { TweetsService } from './services/tweets.service';
import { UserService } from './services/users.service';

import { TweetController } from './controllers/tweet.controller';
import { UserController } from './controllers/user.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    TweetController,
    UserController
  ],
  providers: [
    TweetsService,
    UserService
  ],
})

export class AppModule {}