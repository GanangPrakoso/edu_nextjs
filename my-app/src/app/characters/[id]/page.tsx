import { Character } from "@/types";

async function fetchDetail(id: string): Promise<Character> {
  const response = await fetch("http://localhost:3001/characters/" + id);

  return await response.json();
}

interface Props {
  params: { id: string };
}

export default async function CharacterDetail({ params }: Props) {
  const data = await fetchDetail(params.id);

  return (
    <div className="grid grid-cols-2 px-10 bg-white gap-6">
      <div>
        <img src={data.imageUrl} />
      </div>
      <div className="flex flex-col gap-6 justify-center">
        <h1 className="text-4xl">name: {data.name}</h1>
        <span className="text-slate-500">{data.description}</span>
        <span>power: {data.power}</span>
      </div>
    </div>
  );
}
