import API from "../API.js";
import { Module } from "../Module.js";
interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    avatar: string;
}
interface CreateUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}
interface LoginUser {
    username: string;
    password: string;
    token?: string;
}
export default class AuthModule extends Module {
    constructor(api: API);
    init(): void;
    getUsers(jwtToken: string): Promise<User[] | null>;
    me(jwtToken: string): Promise<User | null>;
    login(userLogin: LoginUser): Promise<string | {
        token: string;
    } | null>;
    create(userCreate: CreateUser): Promise<User | null>;
}
export {};
