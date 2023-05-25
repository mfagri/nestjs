import { ForbiddenException, Injectable } from "@nestjs/common";
// import { User, Bookmark } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from "argon2";
import { AuthDto } from "./dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { User } from "src/user/user.model";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async singup(dto: AuthDto) {
    // Generate password hash
    const hash = await argon.hash(dto.password);

    // Save new user in the database
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hash,
        },
      });

      delete user.hash;
      // Return the saved user
      return user;
    } catch (e) {
      // if (e instanceof PrismaClientKnownRequestError) {
        console.log('heeeere');
        if (e.code === 'P2002') {
          throw new ForbiddenException("Credentials taken");
        }
      // }
      
      // Throw the original error if it's not a known request error
      throw e;
    }
  }

  async login(dto:AuthDto) {
    //find the user by email
    const user = await this.prisma.user.findUnique({
      where:{
        email: dto.email
      }
    })
    //if user does not exist hrow exception
    if(!user)
    {
      throw new ForbiddenException(
        'Credentials incorrect',
      );
    }
    // compare password
    const pswdv = await argon.verify(user.hash,dto.password);
    //if password incorrect throw exeption
    if(!pswdv)
    {
      throw new ForbiddenException(
        'Credentials incorrect',
      );
    }
    //send back the user
    delete user.hash;
    return user;
  }
}
