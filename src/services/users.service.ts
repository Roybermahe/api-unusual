import { Injectable, Inject } from "@nestjs/common";
import { FirebaseFirestoreService } from "@aginix/nestjs-firebase-admin/dist/services";

@Injectable()
export class UserService {
    private nameCollection: string = "users";

    constructor(
        private fireDB: FirebaseFirestoreService
    ) {}

    async getUser(id: string) {
        return (await this.fireDB.doc(`/${ this.nameCollection }/${ id }`).get()).data();
    }
    
}