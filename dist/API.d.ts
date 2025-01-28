import AuthModule from "./modules/auth.js";
import CategoryModule from "./modules/category.js";
import QuestionModule from "./modules/question.js";
import QuizzModule from "./modules/quizz.js";
declare const moduleClasses: {
    categoryModule: typeof CategoryModule;
    authModule: typeof AuthModule;
    questionModule: typeof QuestionModule;
    quizzModule: typeof QuizzModule;
};
type PublicMethods<T> = {
    [K in keyof T as T[K] extends Function ? K : never]: T[K];
};
export type ModuleMap = {
    [K in keyof typeof moduleClasses]: PublicMethods<InstanceType<(typeof moduleClasses)[K]>>;
};
declare class API {
    apiUrl: string;
    private modules;
    constructor(apiUrl: string);
    private loadModules;
    getModule<T extends keyof ModuleMap>(moduleName: T): ModuleMap[T];
    makeRequest<T>(url: string, options?: RequestInit): Promise<T>;
}
export default API;
