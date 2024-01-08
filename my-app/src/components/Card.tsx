import { Character } from "@/app/characters/page";
import Link from "next/link";

export default function Card({ char }: { char: Character }) {
  return (
    <>
      <Link
        href={"/characters/" + char.id}
        className="max-w-sm rounded overflow-hidden shadow-lg"
      >
        <img
          className="w-full"
          style={{ width: 400, height: 200, objectFit: "cover" }}
          src={char.imageUrl}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{char.name}</div>
          <p className="text-gray-700 text-base">type: {char.type}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </Link>
    </>
  );
}
