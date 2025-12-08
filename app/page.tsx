import Image from "next/image";
import UserForm from "@/app/components/UserForm";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen justify-center items-center gap-10">
        <h1 className="font-bold text-6xl underline">CREATE USER</h1>
        <div className="p-8 bg-[#ffdb58] rounded-lg shadow-[8px_8px_0_rgb(0,0,0,0.8)] max-w-3xl w-full">
          <UserForm />
        </div>
      </main>
    </>
  );
}
