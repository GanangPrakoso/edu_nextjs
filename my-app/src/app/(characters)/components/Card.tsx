import { Character } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { revalidateTag } from "next/cache";

interface Props {
  char: Character;
  setSelectedChar: React.Dispatch<React.SetStateAction<Character | null>>;
}

export default function Card({ char, setSelectedChar }: Props) {
  const router = useRouter();

  const deleteHandler = async (id: number) => {
    const response = await fetch("http://localhost:3001/characters/" + id, {
      method: "delete",
    });

    // revalidateTag("a");
    router.refresh();
  };

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg align-items-between">
        <Image
          className="w-full"
          style={{ objectFit: "cover" }}
          width={500}
          height={200}
          src={char.imageUrl}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{char.name}</div>
          <p className="text-gray-400 text-base">
            {char.description.substring(0, 60)}...
          </p>
          <div className="flex justify-between items-end">
            <button
              className="btn btn-accent mt-5"
              onClick={() => {
                const modalElement = document.getElementById(
                  "modal-char"
                ) as HTMLDialogElement | null;
                if (modalElement) {
                  setSelectedChar(char);
                  modalElement.showModal();
                }
              }}
            >
              Add this Character!
            </button>
            <button
              className="btn btn-error"
              onClick={() => {
                deleteHandler(char.id);
              }}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
