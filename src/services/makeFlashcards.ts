import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function makeFlashcards(input: string) {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    if (!apiKey) {
        throw new Error("GOOGLE_API_KEY is not set");
    }

    const ai = new GoogleGenerativeAI(apiKey);
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });


    const prompt = 'You are creating study flashcards. Take the study guide below and generate EXACTLY 10 flashcards. Return ONLY valid JSON. Do not include markdown. Do not include explanations. Do not include extra text before or after the JSON. Format: [ { "question": "Question here", "answer": "Answer here" } ] Rules: - Make questions clear and concise - Answers should usually be 1-3 sentences max - Focus on the most important concepts - Avoid duplicate questions - If the study guide is long, prioritize high-value information Study Guide: {'+input+'}';

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const data = JSON.parse(text);
    
    return data;
}