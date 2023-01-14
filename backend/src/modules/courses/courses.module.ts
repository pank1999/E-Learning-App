import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { coursesProviders } from './courses.provider';
import { CoursesService } from './courses.service';

@Module({
  providers: [CoursesService, ...coursesProviders],
  controllers: [CoursesController]
})
export class CoursesModule {}
