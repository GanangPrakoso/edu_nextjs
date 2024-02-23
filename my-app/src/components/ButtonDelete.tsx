import { revalidatePath } from "next/cache";

export default function ButtonDelete({ id }: { id: number }) {
  const deleteHandler = async (formData: FormData) => {
    "use server";
    const response = await fetch("http://localhost:3001/characters/" + id, {
      method: "delete",
    });

    // revalidateTag("a");
    revalidatePath("/characters");
    // router.refresh();
  };

  return (
    <form action={deleteHandler}>
      <button className="btn btn-error" type="submit">
        delete
      </button>
    </form>
  );
}
