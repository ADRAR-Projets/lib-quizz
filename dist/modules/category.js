import { Module } from "../Module.js";
/**
 * Description placeholder
 *
 * @export
 * @class CategoryModule
 * @typedef {CategoryModule}
 * @extends {Module}
 */
export default class CategoryModule extends Module {
    /**
     * Creates an instance of CategoryModule.
     *
     * @constructor
     * @param {API} api
     */
    constructor(api) {
        super(api);
    }
    /** Description placeholder */
    init() {
        console.log("Category module initialized");
    }
    /**
     * Description placeholder
     *
     * @async
     * @param {string} jwtToken
     * @returns {Promise<Category[] | null>}
     */
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
    /**
     * Uniquement les ROLE_ADMIN peuvent créer une catégorie
     *
     * @async
     * @param {CreateCategory} categoryCreate
     * @param {string} jwtToken
     * @returns {Promise<Category | null>}
     */
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