"use client";

import { deleteCharacter } from "@/actions/character";
import { FaTrash } from "react-icons/fa";

interface Props {
  id: number | undefined;
}

export default function DeleteButton({ id }: Props) {
  return (
    <button className="btn btn-neutral" onClick={() => deleteCharacter(id)}>
      <FaTrash />
    </button>
  );
}
