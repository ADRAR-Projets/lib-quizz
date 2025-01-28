import AuthModule from "./modules/auth.js";
import CategoryModule from "./modules/category.js";
import QuestionModule from "./modules/question.js";
import QuizzModule from "./modules/quizz.js";

const moduleClasses = {
    categoryModule: CategoryModule,
    authModule: AuthModule,
    questionModule: QuestionModule,
    quizzModule: QuizzModule,
};

type PublicMethods<T> = {
    [K in keyof T as T[K] extends Function ? K : never]: T[K];
};

export type ModuleMap = {
    [K in keyof typeof moduleClasses]: PublicMethods<InstanceType<(typeof moduleClasses)[K]>>;
};

class API {
    apiUrl: string;
    private modules: Partial<ModuleMap> = {};

    constructor(apiUrl: string) {
        if (!apiUrl) {
            throw new Error("API URL is required");
        }
        this.apiUrl = apiUrl;
        this.loadModules();
    }

    private async loadModules() {
        for (const [moduleName, ModuleClass] of Object.entries(moduleClasses)) {
            const module = new ModuleClass(this);
            module.init();
            this.modules[moduleName as keyof ModuleMap] = module as any;
        }
    }

    getModule<T extends keyof ModuleMap>(moduleName: T): ModuleMap[T] {
        const module = this.modules[moduleName];
        if (module) {
            return module as ModuleMap[T];
        }
        throw new Error(`Module ${moduleName} not found`);
    }

    async makeRequest<T>(url: string, options?: RequestInit): Promise<T> {
        try {
            const response = await fetch(this.apiUrl + url, options);
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    }
}

export default API;
