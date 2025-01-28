import API from "../API.js";
import { Module } from "../Module.js";

export interface Question {
    id: number;
    title: string;
    description: string;
    value: number;
    answers: {
        text: string;
        valid: boolean;
    }[];
}

interface CreateQuestion {
    title: string;
    description: string;
    pointNumber: number;
    answers: {
        text: string;
        valid: boolean;
    }[];
}

export default class QuestionModule extends Module {
    constructor(api: API) {
        super(api);
    }

    init(): void {
        console.log("Question module initialized");
    }

    async getQuestions(jwtToken: string): Promise<Question[] | null> {
        try {
            const questions = await this.makeRequest<Question[]>("/api/question/all", { headers: { Authorization: `${jwtToken}` } });
            return questions;
        } catch (error) {
            console.error("Error fetch questions", error);
            return null;
        }
    }

    async create(questionCreate: CreateQuestion, jwtToken: string): Promise<Question | null> {
        try {
            const question = await this.makeRequest<Question>("/api/question", {
                body: JSON.stringify(questionCreate),
                headers: { Authorization: `${jwtToken}` },
                method: "POST",
            });
            return question;
        } catch (error) {
            console.error("Error create question:", error);
            return null;
        }
    }
}
