import API from "../API.js";
import { Module } from "../Module.js";
import { Category } from "./category.js";
import { Question } from "./question.js";

interface Quizz {
    id: number;
    title: string;
    description: string;
    categories: Category[];
    questions: Question[];
}

interface CreateQuizz {
    title: string;
    description: string;
    categories: {
        id: number;
    }[];
    questions: {
        id: number;
    }[];
}

export default class QuizzModule extends Module {
    constructor(api: API) {
        super(api);
    }

    init(): void {
        console.log("Quizz module initialized");
    }

    async getQuizz(jwtToken: string): Promise<Quizz[] | null> {
        try {
            const quizz = await this.makeRequest<Quizz[]>("/api/quizz/all", { headers: { Authorization: `${jwtToken}` } });
            return quizz;
        } catch (error) {
            console.error("Error fetch quizzes", error);
            return null;
        }
    }

    async get(id: number, jwtToken: string): Promise<Quizz | null> {
        try {
            const quizz = await this.makeRequest<Quizz>(`/api/quizz/${id}`, { headers: { Authorization: `${jwtToken}` } });
            return quizz;
        } catch (error) {
            console.error("Error fetch quizz", error);
            return null;
        }
    }

    async create(quizzCreate: CreateQuizz, jwtToken: string): Promise<Quizz | null> {
        try {
            const quizz = await this.makeRequest<Quizz>("/api/quizz", {
                body: JSON.stringify(quizzCreate),
                headers: { Authorization: `${jwtToken}` },
                method: "POST",
            });
            return quizz;
        } catch (error) {
            console.error("Error create quizz:", error);
            return null;
        }
    }
}
