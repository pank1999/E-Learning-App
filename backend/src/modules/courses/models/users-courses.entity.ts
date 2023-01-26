import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  ForeignKey
} from 'sequelize-typescript';
import { User } from 'src/modules/users/user.entity';
import { UsersCourses } from '../interface/users-courses.interface';
import { Course } from './course.entity';

@Table
export class UsersCourse extends Model<UsersCourse> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Course)
  @Column
  courseId: number;
}
