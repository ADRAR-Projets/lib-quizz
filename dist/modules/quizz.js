import { Module } from "../Module.js";
export default class QuizzModule extends Module {
    constructor(api) {
        super(api);
    }
    init() {
        console.log("Quizz module initialized");
    }
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