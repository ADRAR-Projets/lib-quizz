import API from "../API.js";
import { Module } from "../Module.js";
/**
 * Description placeholder
 *
 * @export
 * @interface Category
 * @typedef {Category}
 */
export interface Category {
    /**
     * Description placeholder
     *
     * @type {number}
     */
    id: number;
    /**
     * Description placeholder
     *
     * @type {string}
     */
    title: string;
}
/**
 * Description placeholder
 *
 * @interface CreateCategory
 * @typedef {CreateCategory}
 */
interface CreateCategory {
    /**
     * Description placeholder
     *
     * @type {string}
     */
    title: string;
}
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
    constructor(api: API);
    /** Description placeholder */
    init(): void;
    /**
     * Description placeholder
     *
     * @async
     * @param {string} jwtToken
     * @returns {Promise<Category[] | null>}
     */
    getCategories(jwtToken: string): Promise<Category[] | null>;
    /**
     * Uniquement les ROLE_ADMIN peuvent créer une catégorie
     *
     * @async
     * @param {CreateCategory} categoryCreate
     * @param {string} jwtToken
     * @returns {Promise<Category | null>}
     */
    create(categoryCreate: CreateCategory, jwtToken: string): Promise<Category | null>;
}
export {};
