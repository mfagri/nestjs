import { User } from './user.model';
export declare class UserService {
    private user;
    insertUser(name: string, password: string): string;
    getUsers(): User[];
    getSingleUser(username: string): {
        id: string;
        uname: string;
        password: string;
    };
    updateUser(name: string, uname: string, password: string): void;
    private findIUser;
    deletuser(uname: string): void;
}
