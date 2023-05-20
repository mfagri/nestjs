import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addUser(name: string, password: string, data: any): {
        userid: string;
    };
    getALLuser(): import("./user.model").User[];
    getUser(name: string): {
        id: string;
        uname: string;
        password: string;
    };
    updateUser(name: string, uname: string, password: string): import("./user.model").User[];
    removeUser(uname: string): boolean;
}
