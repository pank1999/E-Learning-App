import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { UsersCourses } from '../interface/users-courses.interface';
import { Course } from './course.entity';

@Table
export class UsersCourse extends Model<UsersCourse> {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  userId: number;

  @HasMany(() => Course)
  courses: UsersCourses[];
}
