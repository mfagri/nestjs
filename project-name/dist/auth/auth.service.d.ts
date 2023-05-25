import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    singup(dto: AuthDto): Promise<import(".prisma/client").User>;
    login(dto: AuthDto): Promise<import(".prisma/client").User>;
}
