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

  return data;
}

export default async function Characters() {
  const data = await fetchData();

  return (
    <div className="flex px-10 mt-10 gap-5 flex-wrap justify-center">
      {data.map((el) => (
        <Card key={el.id} char={el} />
      ))}
    </div>
  );
}
