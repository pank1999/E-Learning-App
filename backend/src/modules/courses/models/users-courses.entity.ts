import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { UsersCourses } from '../interface/users-courses.interface';

@Table
export class UsersCourse {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  userId: number;

  @Column({
    type: DataType.ARRAY(DataType.JSON),
    allowNull: false
  })
  courses: UsersCourses[];
}
