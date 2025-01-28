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
    constructor(api: API) {
        super(api);
    }

    init(): void {
        console.log("Auth module initialized");
    }

    async getUsers(jwtToken: string): Promise<User[] | null> {
        try {
            const user = await this.makeRequest<User[]>("/api/users", { headers: { Authorization: `${jwtToken}` } });
            return user;
        } catch (error) {
            console.error("Error fetch users", error);
            return null;
        }
    }

    async me(jwtToken: string): Promise<User | null> {
        try {
            const user = await this.makeRequest<User>("/api/me", { headers: { Authorization: `${jwtToken}` } });
            return user;
        } catch (error) {
            console.error("Error fetch user data:", error);
            return null;
        }
    }

    async login(userLogin: LoginUser): Promise<string | { token: string } | null> {
        try {
            const jwt = await this.makeRequest<LoginUser>("/api/login_check", { body: JSON.stringify(userLogin), method: "POST" });

            if (!jwt.token) {
                return null;
            }

            return {
                token: `Bearer ${jwt.token}`,
            };
        } catch (error) {
            console.error("Error login user:", error);
            return null;
        }
    }

    async create(userCreate: CreateUser): Promise<User | null> {
        try {
            const user = await this.makeRequest<User>("/api/user", { body: JSON.stringify(userCreate), method: "POST" });
            return user;
        } catch (error) {
            console.error("Error create user:", error);
            return null;
        }
    }
}
