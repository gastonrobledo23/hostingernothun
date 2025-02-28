import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";

interface Card {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const useCards = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const querySnapshot = await getDocs(collection(db, "cards"));
      const cardsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Card[];
      setCards(cardsData);
    };

    fetchCards();
  }, []);

  return { cards };
};


