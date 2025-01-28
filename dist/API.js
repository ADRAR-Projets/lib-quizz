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
class API {
    constructor(apiUrl) {
        this.modules = {};
        if (!apiUrl) {
            throw new Error("API URL is required");
        }
        this.apiUrl = apiUrl;
        this.loadModules();
    }
    async loadModules() {
        for (const [moduleName, ModuleClass] of Object.entries(moduleClasses)) {
            const module = new ModuleClass(this);
            module.init();
            this.modules[moduleName] = module;
        }
    }
    getModule(moduleName) {
        const module = this.modules[moduleName];
        if (module) {
            return module;
        }
        throw new Error(`Module ${moduleName} not found`);
    }
    async makeRequest(url, options) {
        try {
            const response = await fetch(this.apiUrl + url, options);
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    }
}
export default API;
//# sourceMappingURL=API.js.map