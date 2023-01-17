import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  HasMany
} from 'sequelize-typescript';
import { Course } from './course.entity';
import { Video } from './video.entity';

@Table
export class CourseSection extends Model<CourseSection> {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  title: string;

  @ForeignKey(() => Course)
  @Column
  courseId: number;

  @HasMany(() => Video)
  videos: Video[];
}
