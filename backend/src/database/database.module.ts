/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { schemas } from "./constants/schemas-array.constant";

@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          dialect: "postgres",
          host: configService.get("DATABASE_HOST"),
          port: +configService.get("DATABASE_PORT"),
          username: configService.get("DATABASE_USERNAME"),
          password: configService.get("DATABASE_PASSWORD"),
          database: configService.get("DATABASE_NAME"),
          models: schemas,
          retryAttempts: 40,
          retryDelay: 10000,
          logging: console.log,
          schema: configService.get("DATABASE_SCHEMA"),
          // TODO: Fix fail on server rerun
          // FIX: create all required indexes
          autoLoadModels: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
