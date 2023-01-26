import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Course } from './course.entity';

@Table
export class CourseImage extends Model<CourseImage> {
  @Column
  Image: string;

  @ForeignKey(() => Course)
  @Column
  courseId: number;
}
