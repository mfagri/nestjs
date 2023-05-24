import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    sinup(dto: AuthDto): Promise<import(".prisma/client").User>;
    signin(): string;
}
