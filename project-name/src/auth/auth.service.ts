import { ForbiddenException, Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from "argon2";
import { AuthDto } from "./dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

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

  login() {
    return "hello";
  }
}
