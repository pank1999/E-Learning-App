/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize-typescript';
import { CourseImage } from 'src/modules/courses/models/course-image.entity';
import { CourseSection } from 'src/modules/courses/models/course-section.entity';
import { Course } from 'src/modules/courses/models/course.entity';
import { UsersCourse } from 'src/modules/courses/models/users-courses.entity';
import { Video } from 'src/modules/courses/models/video.entity';
// import { UsersCourse } from 'src/modules/courses/models/users-courses.entity';
import { User } from 'src/modules/users/user.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        User,
        Course,
        Video,
        UsersCourse,
        CourseImage
      ]);
      await sequelize.sync();
      return sequelize;
    }
  }
];
