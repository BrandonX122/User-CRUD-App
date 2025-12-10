import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function EditUser({ id }: { id: string }) {
  return (
    <Link
      href={`/people/${id}/edit`}
      className="
    w-12 h-12 flex items-center justify-center rounded-full 
    bg-[#ffdb58] text-black
    border-4 border-white border-b-6  /* thicker bottom = raised */
    shadow-md transition-all duration-200 
    hover:translate-y-1 hover:border-b-4 hover:shadow-sm hover:cursor-pointer
    active:translate-y-1 active:border-b-2 active:shadow-sm
  "
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
