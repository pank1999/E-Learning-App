import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table
} from 'sequelize-typescript';
import { User } from 'src/modules/users/user.entity';
import { CourseImage } from './course-image.entity';
import { CourseSection } from './course-section.entity';
import { UsersCourse } from './users-courses.entity';

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

  @BelongsToMany(() => User, {
    through: { model: () => UsersCourse }
  })
  users: User[];
}
