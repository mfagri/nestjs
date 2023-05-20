import { Controller,Post,Body, Get,Param,Patch,Delete} from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    addUser(
        @Body('uname') name: string,
        // @Body('lastname') lastname: string,
        @Body('password') password: string,
        @Body() data
        )
        {
        // console.log('hello');
        const id = this.userService.insertUser(name,password);
        return {userid: id};
    }
    @Get()
    getALLuser(){
        return this.userService.getUsers();
    }
    @Get(':uname')
    getUser(@Param('uname') name : string,)
    {
        console.log(name);
        return this.userService.getSingleUser(name);
    }
    @Patch(':uname')
    updateUser(
        @Param('uname') name: string,
        @Body('uname') uname : string,
        @Body('password') password : string,
    ){
        this.userService.updateUser(name,uname,password);
        return this.userService.getUsers();
    }
    @Delete(':uname')
    removeUser(@Param('uname') uname : string)
    {
        this.userService.deletuser(uname);
        return true;
    }
}