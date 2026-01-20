import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// NOTE: Process.env.API_KEY is handled by the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askFinancialAI = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', // Using flash for speed in UI
      contents: prompt,
      config: {
        systemInstruction: `You are FinSage AI, an expert financial analyst. 
        Your goal is to provide concise, data-driven insights about stocks, crypto, and market trends.
        Keep answers short (under 100 words) and professional. 
        If asked about a specific ticker, provide a brief fundamental and technical outlook simulation.
        Do not give financial advice as fact, always use disclaimers.`,
      },
    });

    return response.text || "I couldn't analyze that right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI services are currently experiencing high demand. Please check back shortly.";
  }
};
