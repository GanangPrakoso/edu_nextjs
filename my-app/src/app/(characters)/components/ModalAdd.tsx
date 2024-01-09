import { Character } from "@/types";
import { useEffect, useState } from "react";

export default function ModalAdd({ char }: { char: Character | null }) {
  const [name, setName] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <dialog id={"modal-char"} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{char?.name}</h3>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="label">
            <span className="label-text">Add new name as your favorite</span>
          </div>
          <div className="flex justify-between">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="type here"
              className="input input-bordered input-success w-full max-w-sm"
            />
            <button type="submit" className="btn btn-accent">
              add!
            </button>
          </div>
        </form>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
