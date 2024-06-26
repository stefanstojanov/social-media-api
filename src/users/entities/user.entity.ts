import { Table, Column, Model, DataType } from 'sequelize-typescript';

enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  @Column({
    type: DataType.ENUM,
    values: ['male', 'female'],
    allowNull: false,
  })
  gender: string;
  @Column({
    type: DataType.ENUM,
    values: [Role.USER, Role.ADMIN],
    defaultValue: Role.USER,
    allowNull: false,
  })
  role: string;
}
