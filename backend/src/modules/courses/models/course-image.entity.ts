import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { Course } from './course.entity';
import { UsersCourse } from './users-courses.entity';

@Table
export class CourseImage extends Model<CourseImage> {
  @Column
  Image: string;

  @ForeignKey(() => Course)
  @Column
  courseId: number;
}
