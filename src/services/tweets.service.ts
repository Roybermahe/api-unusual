import { Injectable } from '@nestjs/common';
import { tweet } from 'src/models/tweet.interface';
import { FirebaseFirestoreService }  from "@aginix/nestjs-firebase-admin/dist/services"


@Injectable()
export class TweetsService {
    private nameCollection: string = "tweets";

    constructor(
        private fireDB: FirebaseFirestoreService
    ) { }
    
    private getCollection() {
        return this.fireDB.collection(this.nameCollection);
    }

    async saveTweets(tweet: tweet) {
        return this.getCollection().add(tweet);
    }

    
    async getTweets() {
        return (await this.getCollection()
        .get())
        .docs.map(item => {
            return {
                id: item.id, 
                data: <tweet>item.data()
            }
        });
    }

    async getTweet(id: string) {
        return (await this.fireDB.doc(`/${ this.nameCollection }/${ id }`).get()).data();
    }
    
    async getUserTweets(id: string) {
        return (await this.getCollection()
        .where('userId','==', id)
        .get()).docs
        .map( item => {
            return { id: item.id , data: <tweet>item.data() }
        });
    }

    async deleteTweet(id: string) {
        return (await this.fireDB.doc(`/${ this.nameCollection }/${ id }`)
        .delete());
    }

    async updateTweet(id: string, tweet: tweet) {
        return (await this.fireDB.doc(`/${ this.nameCollection }/${ id }`)
        .update(tweet));
    }
}