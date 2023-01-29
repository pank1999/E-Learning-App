import {
  Table,
  Column,
  Model,
  DataType,
} from 'sequelize-typescript';

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

  @Column
  courseId: number;

  // @ForeignKey(() => CourseSection)
  // @Column
  // sectionId: number;
  // @BelongsTo(() => CourseSection)
  // section: CourseSection;
}
