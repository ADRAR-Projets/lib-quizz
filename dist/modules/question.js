import { Module } from "../Module.js";
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
    constructor(api) {
        super(api);
    }
    /** Description placeholder */
    init() {
        console.log("Question module initialized");
    }
    /**
     * Description placeholder
     *
     * @async
     * @param {string} jwtToken
     * @returns {Promise<Question[] | null>}
     */
    async getQuestions(jwtToken) {
        try {
            const questions = await this.makeRequest("/api/question/all", { headers: { Authorization: `${jwtToken}` } });
            return questions;
        }
        catch (error) {
            console.error("Error fetch questions", error);
            return null;
        }
    }
    /**
     * Description placeholder
     *
     * @async
     * @param {CreateQuestion} questionCreate
     * @param {string} jwtToken
     * @returns {Promise<Question | null>}
     */
    async create(questionCreate, jwtToken) {
        try {
            const question = await this.makeRequest("/api/question", {
                body: JSON.stringify(questionCreate),
                headers: { Authorization: `${jwtToken}` },
                method: "POST",
            });
            return question;
        }
        catch (error) {
            console.error("Error create question:", error);
            return null;
        }
    }
}
//# sourceMappingURL=question.js.map