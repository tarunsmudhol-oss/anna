import { GoogleGenAI } from "@google/genai";

// Initialize the client
// Always use process.env.API_KEY directly when initializing the client.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDashboardInsight = async (metrics: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Analyze the following financial dashboard update context: "${metrics}".
      Provide a single, short, strategic sentence (max 15 words) suitable for a business dashboard tooltip or notification. 
      Be encouraging but professional.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text?.trim() || "Market trends look positive.";
  } catch (error) {
    console.error("Error fetching Gemini insight:", error);
    return "Unable to generate insights at this moment.";
  }
};