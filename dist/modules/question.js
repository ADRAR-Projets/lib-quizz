import { Module } from "../Module.js";
export default class QuestionModule extends Module {
    constructor(api) {
        super(api);
    }
    init() {
        console.log("Question module initialized");
    }
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