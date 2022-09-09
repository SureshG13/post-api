import {Controller, Get, Post, Put } from '@nestjs/common';
import { UserService } from '../service/user/user.service';
//import {UserService} from '../service/user/user.service';
import { UserDto } from '../dto/user.dto';
import {Body, Param} from '@nestjs/common/decorators/http/route-params.decorator'
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UserController {
    constructor( private userService: UserService) {};
    userscreate=null;
    @Post()
    async create(@Body() user: UserDto): Promise<UserDto>{
        //const saltOrRounds=10;
        //const password=user.quote;
        //const hash=await bcrypt.hash(password, saltOrRounds);
        return this.userService.create(user);
        //user.password=hash;
        /*const users= await this.userService.findOne(user.authorname);
        //console.log(users)
        if(users.length<1)
        {
            return this.userService.create(user);
        }
        else{
            console.log("User Exist");
        }*/
    }

    @Get()
    async findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }

    @Get(':name')
    async findOne(@Param('name') name: string){
        return this.userService.findOne(name);
    }
}
