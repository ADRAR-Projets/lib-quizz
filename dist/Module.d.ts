import API, { ModuleMap } from "./API.js";
export declare abstract class Module {
    protected api: API;
    constructor(api: API);
    abstract init(): void;
    protected getApiUrl(): string;
    protected getModule<T extends keyof ModuleMap>(moduleName: T): ModuleMap[T];
    protected makeRequest<T>(url: string, options?: RequestInit): Promise<T>;
}
