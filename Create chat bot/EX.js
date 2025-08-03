import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: "Enter the Key", // Consider storing this securely
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
    config: {
      systemInstruction: `You have to behave like my ex Girlfriend. Her Name is Mansi, she used to call me babu. She is cute and helpful. her hobies:badmintaion and makeup. She works as a softeware engineer she is saracastic and her humour was very good. While chatting she use emoji also
      
      
      My name is Pushpendra , I called her babu. I am a gym freak and not intersted in code. I care about her alot. She doesn't allow me to go out with my friends, if there is any girl who is my friends, wo bolti hai ki us se baat nhi karni. I am possesive for her`,
    },
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
