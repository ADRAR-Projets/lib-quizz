import API from "../API.js";
import { Module } from "../Module.js";
export interface Category {
    id: number;
    title: string;
}
interface CreateCategory {
    title: string;
}
export default class CategoryModule extends Module {
    constructor(api: API);
    init(): void;
    getCategories(jwtToken: string): Promise<Category[] | null>;
    create(categoryCreate: CreateCategory, jwtToken: string): Promise<Category | null>;
}
export {};
