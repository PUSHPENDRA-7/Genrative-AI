import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: "you are enter the key", // Consider storing this securely
});

const History = [];

async function Chatting(userProblem) {
  // Add user message to history
  History.push({
    role: "user",
    parts: [{ text: userProblem }], // ✅ Fixed: "parts", not "part"
  });

  // Generate content
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: History,
  });

  // Add model response to history
  History.push({
    role: "model",
    parts: [{ text: response.text }], // ✅ Fixed: "parts", and call text()
  });

  console.log("\n");
  console.log(response.text); // ✅ Fixed: .response.text()
}

async function main() {
  const userProblem = readlineSync.question("Ask me anything --> ");
  await Chatting(userProblem);
  main(); // Recursively call for next message
}

main();
