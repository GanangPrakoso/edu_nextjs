import CharacterCard from "@/components/CharacterCard";
import { Character } from "@/types";

async function fetchChars(): Promise<Character[]> {
  const response = await fetch("http://localhost:3001/characters");

  return await response.json();
}

export default async function Characters() {
  const data = await fetchChars();

  return (
    <div className="p-6 flex flex-wrap gap-6 bg-white justify-center">
      {data.map((el) => (
        <CharacterCard char={el} key={el.id} />
      ))}
    </div>
  );
}
