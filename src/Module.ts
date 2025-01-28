import API, { ModuleMap } from "./API.js";

export abstract class Module {
    protected api: API;

    constructor(api: API) {
        this.api = api;
        if (new.target === Module) {
            throw new TypeError("Cannot construct Module instances directly");
        }
    }

    abstract init(): void;

    protected getApiUrl(): string {
        return this.api.apiUrl;
    }

    protected getModule<T extends keyof ModuleMap>(moduleName: T): ModuleMap[T] {
        return this.api.getModule(moduleName);
    }

    protected async makeRequest<T>(url: string, options?: RequestInit): Promise<T> {
        return this.api.makeRequest<T>(url, options);
    }
}
