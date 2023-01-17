import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  HasMany
} from 'sequelize-typescript';
import { CourseSection } from './course-section.entity';
import { UsersCourse } from './users-courses.entity';

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

  @HasMany(() => CourseSection)
  sections: CourseSection[];

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

  @ForeignKey(() => UsersCourse)
  @Column
  userId: number;
}
