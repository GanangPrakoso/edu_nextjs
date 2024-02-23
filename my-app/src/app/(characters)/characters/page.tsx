import { Character } from "@/types";
import CardList from "../components/CardList";
import ButtonDelete from "@/components/ButtonDelete";

async function fetchData(): Promise<Character[]> {
  const response = await fetch("http://localhost:3001/characters", {
    // next: { tags: ["characters", "a"] },
    cache: "no-store",
  });

  const data = await response.json();

  return data;
}

export default async function Characters() {
  const data = await fetchData();

  return (
    <>
      <div className="flex px-10 mt-10 gap-5 flex-wrap justify-center">
        <CardList characters={data}></CardList>
      </div>
    </>
  );
}
