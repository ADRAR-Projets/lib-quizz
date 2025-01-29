/**
 * Description placeholder
 *
 * @export
 * @abstract
 * @class Module
 * @typedef {Module}
 */
export class Module {
    /**
     * Creates an instance of Module.
     *
     * @constructor
     * @param {API} api
     */
    constructor(api) {
        this.api = api;
        if (new.target === Module) {
            throw new TypeError("Cannot construct Module instances directly");
        }
    }
    /**
     * Description placeholder
     *
     * @protected
     * @returns {string}
     */
    getApiUrl() {
        return this.api.apiUrl;
    }
    /**
     * Description placeholder
     *
     * @protected
     * @template {keyof ModuleMap} T
     * @param {T} moduleName
     * @returns {ModuleMap[T]}
     */
    getModule(moduleName) {
        return this.api.getModule(moduleName);
    }
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
    async makeRequest(url, options) {
        return this.api.makeRequest(url, options);
    }
}
//# sourceMappingURL=Module.js.map