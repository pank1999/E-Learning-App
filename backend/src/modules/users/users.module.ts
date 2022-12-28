/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './user.provider';

@Module({
  providers: [UsersService, ...usersProviders],
  exports: [UsersService]
})
export class UsersModule {}
