import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { CourseImage } from './course-image.entity';
import { CourseSection } from './course-section.entity';

@Table
export class Course extends Model<Course> {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @HasMany(() => CourseImage)
  image: CourseImage;

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

  @Column
  facultyId: number;

  @Column
  isPublished: boolean;

  @Column
  progress: number;

  // @BelongsToMany(() => User, {
  //   through: { model: () => UsersCourse }
  // })
  // users: User[];
}
