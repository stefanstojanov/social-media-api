import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create<User>(createUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOneById(id: string) {
    return await this.userModel.findOne<User>({ where: { userId: id } });
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne<User>({ where: { email: email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
