import { Injectable, NotFoundException } from "@nestjs/common";
import {User } from './user.model';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UserService
{
    private user: User[] = [];

    insertUser(name : string ,password : string): string{
        try{

            const alreadyEx = this.findIUser(name);
            return 'false'
        }
        catch(r)
        {
            const userId = uuidv4();
            // const newUser = new User(userId,name,lastname,password);
            const newUser = {
                id: userId,
                uname: name,
                // lastname,
                password
            }
            this.user.push(newUser);
            console.log(this.user);
            return userId;

        }
    }

    getUsers()
    {
        return this.user.slice();
    }
    getSingleUser(username: string)
    {
        console.log(username);
        const users = this.findIUser(username)[0];
        return { ...users};
    }
    updateUser(name : string,uname: string ,password : string){
        const [userf,index] = this.findIUser(name);
        const updateUser = {...userf};
        if(uname)
        {
            console.log('hnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 1');
            updateUser.uname = uname;
            console.log(uname);
            console.log(updateUser.uname);
            console.log('////////////////////////////////////////////////////////');
        }
        if(password)
        {
            console.log('hnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 2');
            updateUser.password = password;
        }
        this.user[index] = updateUser;
        
         
    }

    private findIUser(username: string):[User,number]
    {
        const usersIndex = this.user.findIndex(usr => usr.uname === username);
        const users = this.user[usersIndex];
        if(!users)
            throw new NotFoundException('Could not find user.');
        return [users,usersIndex];
    }

    deletuser(uname: string)
    {
        const userdelindex = this.findIUser(uname)[1];
        this.user.splice(userdelindex,1);
    }
}