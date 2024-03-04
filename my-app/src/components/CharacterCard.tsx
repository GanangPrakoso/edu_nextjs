import { Character } from "@/types";
import Link from "next/link";
import { FaTrash, FaEye } from "react-icons/fa";

interface Props {
  char: Character;
}

export default function CharacterCard({ char }: Props) {
  return (
    <>
      <div className="card w-72 bg-base-100 shadow-xl h-96">
        <figure>
          <img src={char.imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{char.name}</h2>
          <p className="text-slate-400 text-sm">
            {char.description.substring(0, 55)}...
          </p>
          <p>Power: {char.power}</p>

          <div className="card-actions flex justify-between">
            <Link href={"/characters/" + char.id} className="btn btn-accent">
              see detail <FaEye />
            </Link>

            <button className="btn btn-neutral">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
