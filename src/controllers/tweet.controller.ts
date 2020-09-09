import { Controller, Get, Param, Post, Put, Delete, Body } from "@nestjs/common";
import { TweetsService } from "src/services/tweets.service";
import { tweet } from "src/models/tweet.interface";

@Controller('tweets')
export class TweetController {
    constructor(
        private tweetsService: TweetsService
    ) {}

    @Get()
    async getAllTweets() {
        return (await this.tweetsService.getTweets());
    }

    @Get('/user/:Id')
    async getTweetUser(@Param() params: any) {
        return (await this.tweetsService.getUserTweets(<string>params.Id));
    }

    @Get(':Id')
    async getTweet(@Param() params: any) {
        return (await this.tweetsService.getTweet(<string>params.Id));
    }

    @Post()
    async postTweet(@Body() Body: tweet) {
        return (await this.tweetsService.saveTweets(<tweet>Body));
    }

    @Put(':Id/:tweet')
    async putTweet(@Param() params: any) {
        return (await this.tweetsService.updateTweet(<string>params.Id, <tweet>params.tweet));
    }

    @Delete(':Id')
    async deleteTweet(@Param() params: any) {
        return (await this.tweetsService.deleteTweet(<string>params.Id));
    }
}