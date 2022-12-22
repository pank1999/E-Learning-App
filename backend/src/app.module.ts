/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath:
        (process.env.NODE_ENV && `.${process.env.NODE_ENV}.env`) || ".env",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
