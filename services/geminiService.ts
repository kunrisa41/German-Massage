
import { GoogleGenAI } from "@google/genai";

export const getWellnessTip = async (lang: 'de' | 'en' = 'de'): Promise<string> => {
  try {
    // Check if process and env are available safely
    const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : '';
    
    if (!apiKey) {
      return lang === 'de' ? "Entspannung ist der Schlüssel zum Wohlbefinden." : "Relaxation is the key to well-being.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = lang === 'de' 
      ? 'Gib mir einen kurzen, inspirierenden Wellness-Tipp auf Deutsch (maximal 12 Wörter) für eine Thai-Massage Website.'
      : 'Give me a short, inspiring wellness tip in English (max 12 words) for a Thai massage website.';

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        maxOutputTokens: 50,
      }
    });

    return response.text?.trim() || (lang === 'de' ? "Finden Sie Ihre innere Ruhe." : "Find your inner peace.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'de' ? "Gönnen Sie sich heute eine kleine Auszeit." : "Treat yourself to a short break today.";
  }
};
