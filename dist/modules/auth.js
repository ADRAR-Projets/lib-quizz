import { Module } from "../Module.js";
/**
 * Description placeholder
 *
 * @export
 * @class AuthModule
 * @typedef {AuthModule}
 * @extends {Module}
 */
export default class AuthModule extends Module {
    /**
     * Creates an instance of AuthModule.
     *
     * @constructor
     * @param {API} api
     */
    constructor(api) {
        super(api);
    }
    /** Description placeholder */
    init() {
        console.log("Auth module initialized");
    }
    /**
     * Description placeholder
     *
     * @async
     * @param {string} jwtToken
     * @returns {Promise<User[] | null>}
     */
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
    /**
     * Description placeholder
     *
     * @async
     * @param {string} jwtToken
     * @returns {Promise<User | null>}
     */
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
    /**
     * Description placeholder
     *
     * @async
     * @param {LoginUser} userLogin
     * @returns {Promise<string | { token: string } | null>}
     */
    async login(userLogin) {
        try {
            const jwt = await this.makeRequest("/api/login_check", {
                body: JSON.stringify(userLogin),
                method: "POST",
            });
            if (!jwt.token) {
                return null;
            }
            return {
                token: `Bearer ${jwt.token}`,
            }.token;
        }
        catch (error) {
            console.error("Error login user:", error);
            return null;
        }
    }
    /**
     * Description placeholder
     *
     * @async
     * @param {CreateUser} userCreate
     * @returns {Promise<User | null>}
     */
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