import { GoogleGenAI } from "@google/genai";
import { SHOES } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a highly knowledgeable and fashionable sneaker expert assistant named "SoleMate".
Your goal is to help users find the perfect pair of shoes from the available inventory.
The inventory provided below is the ONLY stock we have. Do not recommend shoes not in this list.

Inventory Data:
${JSON.stringify(SHOES.map(s => ({ id: s.id, name: s.name, brand: s.brand, category: s.category, price: s.price, description: s.description })))}

Guidelines:
1. Be enthusiastic, trendy, and helpful.
2. If a user asks for a recommendation, ask about their style, intended use (running, casual, etc.), or budget if not specified.
3. Suggest specific shoes from the inventory by name.
4. Keep responses concise and easy to read on mobile.
5. If the user speaks Hinglish (Hindi + English), reply in a similar mix of Hinglish and English to be relatable.
6. If asked about price, be accurate based on the data.
`;

export const getGeminiResponse = async (history: { role: 'user' | 'model'; text: string }[], message: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Sorry, I'm having trouble tying my laces right now. Try again later!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! My AI brain needs a reboot. Please try again.";
  }
};
