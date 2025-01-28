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
    constructor(api: API);
    init(): void;
    getQuestions(jwtToken: string): Promise<Question[] | null>;
    create(questionCreate: CreateQuestion, jwtToken: string): Promise<Question | null>;
}
export {};
