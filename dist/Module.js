export class Module {
    constructor(api) {
        this.api = api;
        if (new.target === Module) {
            throw new TypeError("Cannot construct Module instances directly");
        }
    }
    getApiUrl() {
        return this.api.apiUrl;
    }
    getModule(moduleName) {
        return this.api.getModule(moduleName);
    }
    async makeRequest(url, options) {
        return this.api.makeRequest(url, options);
    }
}
//# sourceMappingURL=Module.js.map