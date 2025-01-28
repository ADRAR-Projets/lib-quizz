import { Module } from "../Module.js";
export default class CategoryModule extends Module {
    constructor(api) {
        super(api);
    }
    init() {
        console.log("Category module initialized");
    }
    async getCategories(jwtToken) {
        try {
            const user = await this.makeRequest("/api/category/all", { headers: { Authorization: `${jwtToken}` } });
            return user;
        }
        catch (error) {
            console.error("Error fetch categories", error);
            return null;
        }
    }
    async create(categoryCreate, jwtToken) {
        try {
            const category = await this.makeRequest("/api/category", {
                body: JSON.stringify(categoryCreate),
                headers: { Authorization: `${jwtToken}` },
                method: "POST",
            });
            return category;
        }
        catch (error) {
            console.error("Error create category:", error);
            return null;
        }
    }
}
//# sourceMappingURL=category.js.map