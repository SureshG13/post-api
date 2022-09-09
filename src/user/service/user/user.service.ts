import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {UserDto} from 'src/user/dto/user.dto';
//import { UserEntity } from '../service/user/entity/user.entity';
import { UserEntity } from './../../entity/user.entity';
import { IsNull, Repository } from 'typeorm';

export type User = any;

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    create(user: UserDto):Promise<UserDto>{

        return this.userRepository.save(user);
    }

    findAll(): Promise<UserDto[]> {

        return this.userRepository.find();
    }
      async findOne(authorname: string): Promise<User| undefined>{
        return this.userRepository.find({where:{authorname}});
      }
}
