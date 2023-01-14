import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { CourseSection } from '../interface/course-section.interface';

@Table
export class Course extends Model<Course> {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  img: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    values: [
      'programming-language',
      'web-development',
      'android',
      'AI/ML',
      'Data-science',
      'UI/UX',
      'IOT'
    ]
  })
  category: string;

  @Column({
    type: DataType.ARRAY(DataType.JSON),
    allowNull: false
  })
  section: CourseSection[];

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  author: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  fees: string;
}
