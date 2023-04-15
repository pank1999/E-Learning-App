/* eslint-disable prettier/prettier */
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  BelongsToMany,
  HasMany
} from 'sequelize-typescript';
import { Course } from '../courses/models/course.entity';
import { UsersCourse } from '../courses/models/users-courses.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string;

  @Column({
    type: DataType.ENUM,
    values: ['male', 'female'],
    allowNull: false
  })
  gender: string;

  @Column({
    type: DataType.ENUM,
    values: ['Faculty', 'Student', 'Admin'],
    allowNull: false
  })
  role: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  dob: Date;

  @BelongsToMany(() => Course, {
    through: { model: () => UsersCourse }
  })
  courses: Course[];
}
