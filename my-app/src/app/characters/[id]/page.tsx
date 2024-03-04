import { Character } from "@/types";
import type { Metadata, ResolvingMetadata } from "next";

type MetadataProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: MetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const data: Character = await fetch(
    `http://localhost:3001/characters/${id}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.name,
    description: data.description,
    openGraph: {
      images: [data.imageUrl, ...previousImages],
    },
  };
}

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
