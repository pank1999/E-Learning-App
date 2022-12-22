/* eslint-disable prettier/prettier */
import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Index,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { UserModel } from "../models/user";

@Table({ tableName: "user" })
export class UserSchema extends Model<UserModel> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  emailId: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  dob: Date;

  @AllowNull(false)
  @Column(DataType.STRING)
  gender: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string;
}
