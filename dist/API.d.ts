import AuthModule from "./modules/auth.js";
import CategoryModule from "./modules/category.js";
import QuestionModule from "./modules/question.js";
import QuizzModule from "./modules/quizz.js";
/**
 * Description placeholder
 *
 * @type {{ categoryModule: typeof CategoryModule; authModule: typeof AuthModule; questionModule: typeof QuestionModule; quizzModule: typeof QuizzModule; }}
 */
declare const moduleClasses: {
    categoryModule: typeof CategoryModule;
    authModule: typeof AuthModule;
    questionModule: typeof QuestionModule;
    quizzModule: typeof QuizzModule;
};
/**
 * Description placeholder
 *
 * @typedef {PublicMethods}
 * @template T
 */
type PublicMethods<T> = {
    [K in keyof T as T[K] extends Function ? K : never]: T[K];
};
/**
 * Description placeholder
 *
 * @export
 * @typedef {ModuleMap}
 */
export type ModuleMap = {
    [K in keyof typeof moduleClasses]: PublicMethods<InstanceType<(typeof moduleClasses)[K]>>;
};
/**
 * Description placeholder
 *
 * @class API
 * @typedef {API}
 */
declare class API {
    /**
     * Description placeholder
     *
     * @type {string}
     */
    apiUrl: string;
    /**
     * Description placeholder
     *
     * @private
     * @type {Partial<ModuleMap>}
     */
    private modules;
    /**
     * Creates an instance of API.
     *
     * @constructor
     * @param {string} apiUrl
     */
    constructor(apiUrl: string);
    /**
     * Description placeholder
     *
     * @private
     * @async
     * @returns {*}
     */
    private loadModules;
    /**
     * Description placeholder
     *
     * @template {keyof ModuleMap} T
     * @param {T} moduleName
     * @returns {ModuleMap[T]}
     */
    getModule<T extends keyof ModuleMap>(moduleName: T): ModuleMap[T];
    /**
     * Description placeholder
     *
     * @async
     * @template T
     * @param {string} url
     * @param {?RequestInit} [options]
     * @returns {Promise<T>}
     */
    makeRequest<T>(url: string, options?: RequestInit): Promise<T>;
}
export default API;
