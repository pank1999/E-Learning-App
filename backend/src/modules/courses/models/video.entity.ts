import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript';
import { Course } from './course.entity';

@Table
export class Video extends Model<Video> {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  videoUrl: string;

  @ForeignKey(() => Course)
  courseId: number;

  @BelongsTo(() => Course)
  course: Course;
}
