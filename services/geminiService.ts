
import { GoogleGenAI } from "@google/genai";

export const getWellnessTip = async (lang: 'de' | 'en' = 'de'): Promise<string> => {
  try {
    // Correct initialization as per guidelines: {apiKey: process.env.API_KEY}
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Hard requirement check for API_KEY
    if (!process.env.API_KEY) return lang === 'de' ? "Entspannung ist der Schlüssel." : "Relaxation is the key.";

    const prompt = lang === 'de' 
      ? 'Gib mir einen kurzen, inspirierenden Wellness-Tipp auf Deutsch (maximal 12 Wörter) für eine Thai-Massage Website.'
      : 'Give me a short, inspiring wellness tip in English (max 12 words) for a Thai massage website.';

    // Correct generateContent call with both model and prompt in parameters
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        maxOutputTokens: 50,
      }
    });

    // Access .text property directly, do not call as a method
    return response.text?.trim() || (lang === 'de' ? "Finden Sie Ihre innere Ruhe." : "Find your inner peace.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'de' ? "Gönnen Sie sich eine Auszeit." : "Treat yourself to a break.";
  }
};
