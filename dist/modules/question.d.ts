import API from "../API.js";
import { Module } from "../Module.js";
/**
 * Description placeholder
 *
 * @export
 * @interface Question
 * @typedef {Question}
 */
export interface Question {
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
    /**
     * Description placeholder
     *
     * @type {string}
     */
    description: string;
    /**
     * Description placeholder
     *
     * @type {number}
     */
    value: number;
    /**
     * Description placeholder
     *
     * @type {{
     *         text: string;
     *         valid: boolean;
     *     }[]}
     */
    answers: {
        text: string;
        valid: boolean;
    }[];
}
/**
 * Description placeholder
 *
 * @interface CreateQuestion
 * @typedef {CreateQuestion}
 */
interface CreateQuestion {
    /**
     * Description placeholder
     *
     * @type {string}
     */
    title: string;
    /**
     * Description placeholder
     *
     * @type {string}
     */
    description: string;
    /**
     * Description placeholder
     *
     * @type {number}
     */
    pointNumber: number;
    /**
     * Description placeholder
     *
     * @type {{
     *         text: string;
     *         valid: boolean;
     *     }[]}
     */
    answers: {
        text: string;
        valid: boolean;
    }[];
}
/**
 * Description placeholder
 *
 * @export
 * @class QuestionModule
 * @typedef {QuestionModule}
 * @extends {Module}
 */
export default class QuestionModule extends Module {
    /**
     * Creates an instance of QuestionModule.
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
     * @returns {Promise<Question[] | null>}
     */
    getQuestions(jwtToken: string): Promise<Question[] | null>;
    /**
     * Description placeholder
     *
     * @async
     * @param {CreateQuestion} questionCreate
     * @param {string} jwtToken
     * @returns {Promise<Question | null>}
     */
    create(questionCreate: CreateQuestion, jwtToken: string): Promise<Question | null>;
}
export {};
