import { Character } from "@/types";

interface Props {
  params: { id: string };
}

async function fetchDetail(id: number): Promise<Character> {
  const response = await fetch("http://localhost:3001/characters/" + id);
  const responseJSON: Character = await response.json();
  return responseJSON;
}

export default async function Detail({ params }: Props) {
  const data = await fetchDetail(+params.id);

  return (
    <>
      <h1 className="text-center text-4xl">ini Detail {params.id} </h1>
      <h1 className="text-center text-4xl">name {data.name} </h1>
      <h1 className="text-center text-4xl">ini desc {data.description} </h1>
    </>
  );
}
