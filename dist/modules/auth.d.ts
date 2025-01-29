import API from "../API.js";
import { Module } from "../Module.js";
/**
 * Description placeholder
 *
 * @interface User
 * @typedef {User}
 */
interface User {
    /**
     * Description placeholder
     *
     * @type {number}
     */
    id: number;
    /**
     * Description placeholder
     *
     * @type {string}
     */
    firstname: string;
    /**
     * Description placeholder
     *
     * @type {string}
     */
    lastname: string;
    /**
     * Description placeholder
     *
     * @type {string}
     */
    email: string;
    /**
     * Description placeholder
     *
     * @type {string}
     */
    avatar: string;
}
/**
 * Description placeholder
 *
 * @interface CreateUser
 * @typedef {CreateUser}
 */
interface CreateUser {
    /**
     * Description placeholder
     *
     * @type {string}
     */
    firstname: string;
    /**
     * Description placeholder
     *
     * @type {string}
     */
    lastname: string;
    /**
     * Description placeholder
     *
     * @type {string}
     */
    email: string;
    /**
     * Description placeholder
     *
     * @type {string}
     */
    password: string;
}
/**
 * Description placeholder
 *
 * @interface LoginUser
 * @typedef {LoginUser}
 */
interface LoginUser {
    /**
     * Description placeholder
     *
     * @type {string}
     */
    username: string;
    /**
     * Description placeholder
     *
     * @type {string}
     */
    password: string;
    /**
     * Description placeholder
     *
     * @type {?string}
     */
    token?: string;
}
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
    constructor(api: API);
    /** Description placeholder */
    init(): void;
    /**
     * Description placeholder
     *
     * @async
     * @param {string} jwtToken
     * @returns {Promise<User[] | null>}
     */
    getUsers(jwtToken: string): Promise<User[] | null>;
    /**
     * Description placeholder
     *
     * @async
     * @param {string} jwtToken
     * @returns {Promise<User | null>}
     */
    me(jwtToken: string): Promise<User | null>;
    /**
     * Description placeholder
     *
     * @async
     * @param {LoginUser} userLogin
     * @returns {Promise<string | { token: string } | null>}
     */
    login(userLogin: LoginUser): Promise<string | {
        token: string;
    } | null>;
    /**
     * Description placeholder
     *
     * @async
     * @param {CreateUser} userCreate
     * @returns {Promise<User | null>}
     */
    create(userCreate: CreateUser): Promise<User | null>;
}
export {};
