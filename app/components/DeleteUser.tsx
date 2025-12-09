import { deleteUser } from "@/lib/action";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeleteUser({ id }: { id: string }) {
  const deleteUserById = deleteUser.bind(null, id);
  return (
    <form action={deleteUserById}>
      <button
        type="submit"
        className="
    w-12 h-12 flex items-center justify-center rounded-full 
    bg-[#ffdb58] text-black
    border-4 border-white border-b-6  /* thicker bottom = raised */
    shadow-md transition-all duration-200 
    hover:translate-y-1 hover:border-b-4 hover:shadow-sm hover:cursor-pointer
    active:translate-y-1 active:border-b-2 active:shadow-sm
  "
      >
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
