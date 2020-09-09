import { users } from "./user.interface";

export interface tweet {
    text: string;
    user: users;
    date: Date;
    userId: string;
}