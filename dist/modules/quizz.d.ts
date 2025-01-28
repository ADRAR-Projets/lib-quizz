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
    constructor(api: API);
    init(): void;
    getQuizz(jwtToken: string): Promise<Quizz[] | null>;
    get(id: number, jwtToken: string): Promise<Quizz | null>;
    create(quizzCreate: CreateQuizz, jwtToken: string): Promise<Quizz | null>;
}
export {};
