import { addCharacter } from "@/actions/character";
import { Character } from "@/types";

export default function AddCharSSR() {
  const addCharacterServerAction = async (formData: FormData) => {
    "use server";

    const rawFormData = {
      name: formData.get("name"),
      imageUrl: formData.get("imageUrl"),
      description: formData.get("description"),
      power: Number(formData.get("number")),
    };

    await addCharacter(rawFormData as Character);
  };

  return (
    <div className="bg-white pt-10">
      <form
        action={addCharacterServerAction}
        className="flex flex-col gap-3"
        style={{ width: "40vw", margin: "auto" }}
      >
        <label>name</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="name"
          required
        />
        <label>image</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="imageUrl"
        />
        <label>power</label>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="power"
        />
        <label>description</label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="type here"
          name="description"
        ></textarea>

        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}
