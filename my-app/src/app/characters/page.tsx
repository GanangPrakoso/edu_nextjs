"use client";

import Card from "@/components/Card";

export interface Character {
  id: number;
  name: string;
  imageUrl: string;
  type: string;
}

async function fetchData(): Promise<Character[]> {
  const response = await fetch("http://localhost:3001/characters");
  const data = await response.json();

  console.log({ data });

  return data;

  // throw new Error();
}

export default async function Characters() {
  const data = await fetchData();

  return (
    <div className="flex px-10 mt-10 gap-5">
      {data.map((el) => (
        <Card key={el.id} char={el} />
      ))}
    </div>
  );
}
