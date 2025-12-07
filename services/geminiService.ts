import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent, WebsiteConfig } from "../types";

const SYSTEM_INSTRUCTION = `You are an expert web designer and content strategist. 
Your goal is to generate structured website content for a student project based on a specific school subject.
The content should be educational, engaging, and appropriate for a high school level.
Return strictly JSON.`;

export const generateWebsiteContent = async (config: WebsiteConfig): Promise<GeneratedContent> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `Create a website content structure for the subject: ${config.subject}.
  
  The user has requested the following features:
  - Header: ${config.features.header}
  - Hero Section: ${config.features.hero}
  - Navigation: ${config.features.nav}
  - Content Sections: ${config.features.sections}
  - Footer: ${config.features.footer}

  Generate a valid JSON object with the following schema:
  - title: The name of the website.
  - heroHeadline: A catchy headline for the hero section.
  - heroSubheadline: A subtitle for the hero section.
  - navLinks: An array of 3-5 short navigation link names.
  - sections: An array of 3 content sections. Each object has:
    - title: Section title.
    - content: A paragraph of educational text (approx 40-60 words).
    - layoutType: One of 'text-only', 'image-left', 'image-right', 'grid'.
  - footerText: Copyright and a short resource credit.
  - primaryColor: A hex code suitable for the subject (e.g. Red for Anatomy, Blue for Physics).
  - accentColor: A complementary hex code.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                heroHeadline: { type: Type.STRING },
                heroSubheadline: { type: Type.STRING },
                navLinks: { type: Type.ARRAY, items: { type: Type.STRING } },
                sections: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            title: { type: Type.STRING },
                            content: { type: Type.STRING },
                            layoutType: { type: Type.STRING } // We will validate enum manually if needed, or trust the prompt
                        }
                    }
                },
                footerText: { type: Type.STRING },
                primaryColor: { type: Type.STRING },
                accentColor: { type: Type.STRING }
            }
        }
      },
    });

    const text = response.text;
    if (!text) {
        throw new Error("No response from Gemini");
    }
    
    return JSON.parse(text) as GeneratedContent;
  } catch (error) {
    console.error("Error generating website content:", error);
    throw error;
  }
};