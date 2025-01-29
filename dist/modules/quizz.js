import { Module } from "../Module.js";
/**
 * Description placeholder
 *
 * @export
 * @class QuizzModule
 * @typedef {QuizzModule}
 * @extends {Module}
 */
export default class QuizzModule extends Module {
    /**
     * Creates an instance of QuizzModule.
     *
     * @constructor
     * @param {API} api
     */
    constructor(api) {
        super(api);
    }
    /** Description placeholder */
    init() {
        console.log("Quizz module initialized");
    }
    /**
     * Description placeholder
     *
     * @async
     * @param {string} jwtToken
     * @returns {Promise<Quizz[] | null>}
     */
    async getQuizz(jwtToken) {
        try {
            const quizz = await this.makeRequest("/api/quizz/all", { headers: { Authorization: `${jwtToken}` } });
            return quizz;
        }
        catch (error) {
            console.error("Error fetch quizzes", error);
            return null;
        }
    }
    /**
     * Description placeholder
     *
     * @async
     * @param {number} id
     * @param {string} jwtToken
     * @returns {Promise<Quizz | null>}
     */
    async get(id, jwtToken) {
        try {
            const quizz = await this.makeRequest(`/api/quizz/${id}`, { headers: { Authorization: `${jwtToken}` } });
            return quizz;
        }
        catch (error) {
            console.error("Error fetch quizz", error);
            return null;
        }
    }
    /**
     * Uniquement les ROLE_ADMIN peuvent créer un quizz
     *
     * @async
     * @param {CreateQuizz} quizzCreate
     * @param {string} jwtToken
     * @returns {Promise<Quizz | null>}
     */
    async create(quizzCreate, jwtToken) {
        try {
            const quizz = await this.makeRequest("/api/quizz", {
                body: JSON.stringify(quizzCreate),
                headers: { Authorization: `${jwtToken}` },
                method: "POST",
            });
            return quizz;
        }
        catch (error) {
            console.error("Error create quizz:", error);
            return null;
        }
    }
}
//# sourceMappingURL=quizz.js.map