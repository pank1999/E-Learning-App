import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { CourseSection } from './course-section.entity';

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
  url: string;

  @Column
  courseId: number;

  @ForeignKey(() => CourseSection)
  @Column
  sectionId: number;
  @BelongsTo(() => CourseSection)
  section: CourseSection;
}
