import { fetchUser, fetchPages } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import UserCard from "@/app/components/UserCard";
import PaginationPages from "@/app/components/PaginationPages";
export default async function Page(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const people = await fetchUser(currentPage);
  const totalPages = await fetchPages();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="max-w-5xl w-full inline-block">
        <div className="border-4 border-[#fefae0] bg-[#ffdb58] shadow-md inline-block px-2 py-2 rounded-full mb-1">
          <Link href="/" className="font-black">
            <ArrowLeft />
          </Link>
        </div>
      </div>
      <div className="bg-[#fefae0] max-w-5xl w-full rounded-lg shadow-lg/10 flex flex-col items-center p-8 relative ">
        <section
          key={currentPage}
          className=" overflow-hidden p-6 w-full border-4 border-[#ffe97f] rounded-lg inset-shadow-sm inset-shadow-[#ffe97f] grid grid-cols-3 grid-rows-3 gap-5"
        >
          {people.map((p: any) => (
            <UserCard
              key={p.id}
              person={p.id}
              first={p.first_name}
              last={p.last_name}
              bday={p.birthday}
            />
          ))}
        </section>
        <div className="mt-2">
          <PaginationPages totalPages={totalPages} currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
}
