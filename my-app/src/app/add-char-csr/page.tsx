"use client";

import { addCharacter } from "@/actions/character";
import { Character } from "@/types";
import { ChangeEvent, FormEvent, useState } from "react";

export default function AddCharCSR() {
  const [input, setInput] = useState<Character>({
    name: "",
    imageUrl: "",
    description: "",
    power: 0,
  });

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // post menggunakan fetch (server action)
    addCharacter(input);
  };

  return (
    <div className="bg-white pt-10">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-3"
        style={{ width: "40vw", margin: "auto" }}
      >
        <label>name</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="name"
          value={input.name}
          onChange={changeHandler}
        />
        <label>image</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="imageUrl"
          value={input.imageUrl}
          onChange={changeHandler}
        />
        <label>power</label>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-full"
          value={input.power}
          onChange={changeHandler}
          name="power"
        />
        <label>description</label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="type here"
          onChange={changeHandler}
          name="description"
          value={input.description}
        ></textarea>

        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}
