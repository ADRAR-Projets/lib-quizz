import API, { ModuleMap } from "./API.js";
/**
 * Description placeholder
 *
 * @export
 * @abstract
 * @class Module
 * @typedef {Module}
 */
export declare abstract class Module {
    /**
     * Description placeholder
     *
     * @protected
     * @type {API}
     */
    protected api: API;
    /**
     * Creates an instance of Module.
     *
     * @constructor
     * @param {API} api
     */
    constructor(api: API);
    /**
     * Description placeholder
     *
     * @abstract
     */
    abstract init(): void;
    /**
     * Description placeholder
     *
     * @protected
     * @returns {string}
     */
    protected getApiUrl(): string;
    /**
     * Description placeholder
     *
     * @protected
     * @template {keyof ModuleMap} T
     * @param {T} moduleName
     * @returns {ModuleMap[T]}
     */
    protected getModule<T extends keyof ModuleMap>(moduleName: T): ModuleMap[T];
    /**
     * Description placeholder
     *
     * @protected
     * @async
     * @template T
     * @param {string} url
     * @param {?RequestInit} [options]
     * @returns {Promise<T>}
     */
    protected makeRequest<T>(url: string, options?: RequestInit): Promise<T>;
}
