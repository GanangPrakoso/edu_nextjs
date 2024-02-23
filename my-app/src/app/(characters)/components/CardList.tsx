// "use client";

import { Character } from "@/types";
import Card from "./Card";
import { useState } from "react";
import ModalAdd from "./ModalAdd";

export default function CardList({ characters }: { characters: Character[] }) {
  // const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  return (
    <>
      {characters.map((el) => (
        <Card
          key={el.id}
          char={el}
          setSelectedChar={null}
          // setSelectedChar={setSelectedChar}
        />
      ))}
      {/* <ModalAdd char={selectedChar} /> */}
    </>
  );
}
