import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table
} from 'sequelize-typescript';
import { User } from 'src/modules/users/user.entity';
import { CourseImage } from './course-image.entity';
import { CourseSection } from './course-section.entity';
import { Video } from './video.entity';

@Table
export class Course extends Model<Course> {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @HasMany(() => CourseImage)
  image: CourseImage;

  @HasMany(() => Video)
  videos: Video;

  // @HasMany(() => User)
  // user: User;

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
}
