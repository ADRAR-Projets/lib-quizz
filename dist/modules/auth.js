import { Module } from "../Module.js";
export default class AuthModule extends Module {
    constructor(api) {
        super(api);
    }
    init() {
        console.log("Auth module initialized");
    }
    async getUsers(jwtToken) {
        try {
            const user = await this.makeRequest("/api/users", { headers: { Authorization: `${jwtToken}` } });
            return user;
        }
        catch (error) {
            console.error("Error fetch users", error);
            return null;
        }
    }
    async me(jwtToken) {
        try {
            const user = await this.makeRequest("/api/me", { headers: { Authorization: `${jwtToken}` } });
            return user;
        }
        catch (error) {
            console.error("Error fetch user data:", error);
            return null;
        }
    }
    async login(userLogin) {
        try {
            const jwt = await this.makeRequest("/api/login_check", { body: JSON.stringify(userLogin), method: "POST" });
            if (!jwt.token) {
                return null;
            }
            return {
                token: `Bearer ${jwt.token}`,
            };
        }
        catch (error) {
            console.error("Error login user:", error);
            return null;
        }
    }
    async create(userCreate) {
        try {
            const user = await this.makeRequest("/api/user", { body: JSON.stringify(userCreate), method: "POST" });
            return user;
        }
        catch (error) {
            console.error("Error create user:", error);
            return null;
        }
    }
}
//# sourceMappingURL=auth.js.map