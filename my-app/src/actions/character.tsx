"use server";

import { Character } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteCharacter(id: number | undefined): Promise<void> {
  const response = await fetch("http://localhost:3001/characters/" + id, {
    method: "delete",
  });

  const responseJSON = await response.json();

  revalidatePath("/characters");

  console.log(responseJSON, "<<< INI RESPONSE DELETE");
}

export async function addCharacter(character: Character): Promise<void> {
  const response = await fetch("http://localhost:3001/characters", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(character),
  });

  if (response.ok) {
    revalidatePath("/characters");
    redirect("/characters");
  }
}
