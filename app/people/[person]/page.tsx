import { fetchUserById } from "@/lib/data";
import DeleteUser from "@/app/components/DeleteUser";
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
          <DeleteUser id={id} />
        </div>
      </section>
    </div>
  );
}
