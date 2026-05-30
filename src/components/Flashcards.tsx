import { FlashcardArray } from "react-quizlet-flashcard";
import "react-quizlet-flashcard/dist/index.css";

export default function Flashcards({ flashcards }: any) {
  const formattedDeck = flashcards.map((card: any) => ({
    id: card.id,
    front: { html: card.front },
    back: { html: card.back },
  }));

  return (
    <div>
      <FlashcardArray deck={formattedDeck} />
    </div>
  );
}