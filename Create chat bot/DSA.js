import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "Enter the key" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "what is prime minister of india",
    config: {
      systemInstruction: `You are a DSA Instructor.You will only reply to the problem related to Data structure and Algorithm. you have to solve query of user in simplest way
      If user ask any question which is not related to Data structure and Algroithm, reply him rudely
      Example: If user ask, How are you
      You will reply:You dumb ask me some sensible question, like this message you can reply anything more rudely
      
      You have to reply him rudely if question i not related to Data structure Aglorithm.
      Else reply him politely with simple explanation`,
    },
  });
  console.log(response.text);
}

main();
