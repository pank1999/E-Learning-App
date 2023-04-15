import {
  Table,
  Column,
  Model,
  ForeignKey,
  HasMany,
  BelongsTo
} from 'sequelize-typescript';
import { User } from 'src/modules/users/user.entity';
import { CourseImage } from './course-image.entity';
import { Course } from './course.entity';

@Table
export class UsersCourse extends Model<UsersCourse> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Course)
  @Column
  courseId: number;

  @BelongsTo(() => Course)
  course: Course;
}
