"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let UserService = class UserService {
    constructor() {
        this.user = [];
    }
    insertUser(name, password) {
        try {
            const alreadyEx = this.findIUser(name);
            return 'false';
        }
        catch (r) {
            const userId = (0, uuid_1.v4)();
            const newUser = {
                id: userId,
                uname: name,
                password
            };
            this.user.push(newUser);
            console.log(this.user);
            return userId;
        }
    }
    getUsers() {
        return this.user.slice();
    }
    getSingleUser(username) {
        console.log(username);
        const users = this.findIUser(username)[0];
        return Object.assign({}, users);
    }
    updateUser(name, uname, password) {
        const [userf, index] = this.findIUser(name);
        const updateUser = Object.assign({}, userf);
        if (uname) {
            console.log('hnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 1');
            updateUser.uname = uname;
            console.log(uname);
            console.log(updateUser.uname);
            console.log('////////////////////////////////////////////////////////');
        }
        if (password) {
            console.log('hnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 2');
            updateUser.password = password;
        }
        this.user[index] = updateUser;
    }
    findIUser(username) {
        const usersIndex = this.user.findIndex(usr => usr.uname === username);
        const users = this.user[usersIndex];
        if (!users)
            throw new common_1.NotFoundException('Could not find user.');
        return [users, usersIndex];
    }
    deletuser(uname) {
        const userdelindex = this.findIUser(uname)[1];
        this.user.splice(userdelindex, 1);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map