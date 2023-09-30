import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findById(id: string): Promise<User> {
    return this.userRepository.findById(id);
  }

  async updateAvatar(userId: string, avatarPath: string): Promise<User> {
    return this.userRepository.updateAvatar(userId, avatarPath);
  }
}
