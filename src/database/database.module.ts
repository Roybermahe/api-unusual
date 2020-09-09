import { Module } from "@nestjs/common";
import { firebaseApp } from "./database.provider";

@Module({
    imports: [
        firebaseApp
    ]
})

export class DatabaseModule {}