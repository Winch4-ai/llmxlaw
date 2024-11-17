import React, { useState } from "react";
import { callGPT4 } from "@/lib/openai";

const ChatGPT: React.FC = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const gptResponse = await callGPT4(input);
      setResponse(gptResponse);
    } catch (error) {
      setResponse("Erreur lors de l'appel à GPT-4");
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Posez une question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Envoyer
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h3 className="font-bold">Réponse :</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatGPT;
