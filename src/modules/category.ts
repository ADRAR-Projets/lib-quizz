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
    constructor(api: API) {
        super(api);
    }

    init(): void {
        console.log("Category module initialized");
    }

    async getCategories(jwtToken: string): Promise<Category[] | null> {
        try {
            const user = await this.makeRequest<Category[]>("/api/category/all", { headers: { Authorization: `${jwtToken}` } });
            return user;
        } catch (error) {
            console.error("Error fetch categories", error);
            return null;
        }
    }

    async create(categoryCreate: CreateCategory, jwtToken: string): Promise<Category | null> {
        try {
            const category = await this.makeRequest<Category>("/api/category", {
                body: JSON.stringify(categoryCreate),
                headers: { Authorization: `${jwtToken}` },
                method: "POST",
            });
            return category;
        } catch (error) {
            console.error("Error create category:", error);
            return null;
        }
    }
}
