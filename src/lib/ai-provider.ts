import { GoogleGenAI } from "@google/genai";

//TODO: Fix for better security
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: apiKey });

export const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  history: [],
});
