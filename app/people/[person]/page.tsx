import { fetchUserById } from "@/lib/data";
import DeleteUser from "@/app/components/DeleteUser";
import EditUser from "@/app/components/EditUser";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default async function Page(props: {
  params: Promise<{ person: string }>;
}) {
  const params = await props.params;
  const id = params.person;
  const user = await fetchUserById(id);

  return (
    <div className="max-w-5xl w-full mx-auto">
      <header className="mb-20 border-6 border-white shadow-amber-400 shadow-md flex justify-center p-4 rounded-md mt-2">
        <h1 className="text-5xl font-bold ">
          {user.first_name} {user.last_name}
        </h1>
      </header>
      <section className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-2xl font-bold">
          <span className="underline">{user.first_name}'s</span> Birthday is on
        </h1>
        <div className="shadow-lg/20 w-full max-w-3xl rounded-2xl h-82 flex justify-center items-center border-4 border-amber-400 bg-[#fefae0]">
          <h2 className="text-6xl font-bold  text-shadow-[4px_4px_0_rgba(255_202_40/0.7)]">
            {user.birthday}
          </h2>
        </div>
        <div className="mt-20 flex flex-col items-center gap-3">
          <p className="font-bold text-lg">
            Remind Yourself to wish {user.first_name} a Happy Birthday!
          </p>
          <p className="font-bold text-lg"> Contact: {user.email}</p>
          <div className="flex gap-3">
            <Link
              href="/people"
              className="
    w-12 h-12 flex items-center justify-center rounded-full 
    bg-[#ffdb58] text-black
    border-4 border-white border-b-6  /* thicker bottom = raised */
    shadow-md transition-all duration-200 
    hover:translate-y-1 hover:border-b-4 hover:shadow-sm hover:cursor-pointer
    active:translate-y-1 active:border-b-2 active:shadow-sm
  "
            >
              <ArrowLeft />
            </Link>
            <EditUser id={id} />
            <DeleteUser id={id} />
          </div>
        </div>
      </section>
    </div>
  );
}
