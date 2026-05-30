import { useState } from "react";
import makeFlashcards from "../services/makeFlashcards";

export default function ChatInput({ setFlashcards }: { setFlashcards: (cards: any[]) => void }) {
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    const data: any = await makeFlashcards(message);

    const flashcards = data.map((item: any, index: any) => {
      return {
        id: index + 1,
        front: item.question,
        back: item.answer,
      };
    });

    setFlashcards(flashcards);

    setMessage("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="flex items-end gap-2 bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 shadow-md focus-within:ring-2 focus-within:ring-blue-500">
        
        <textarea
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Put your notes here and AI will make you flashcards out of it!"
          className="flex-1 resize-none bg-transparent text-white placeholder-zinc-400 outline-none max-h-40"
        />

        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition disabled:opacity-50"
        >
          Send
        </button>

      </div>
    </div>
  );
}