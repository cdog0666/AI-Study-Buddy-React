import { useState } from "react";
import ChatInput from "./components/ChatInput"
import Flashcards from "./components/Flashcards";

function App() {
   const [flashcards, setFlashcards] = useState<any[]>([]);

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        {flashcards.length === 0 ? (<ChatInput setFlashcards={setFlashcards}/>) : (<Flashcards flashcards={flashcards}/>)}
      </div>
    </>
  )
}

export default App
