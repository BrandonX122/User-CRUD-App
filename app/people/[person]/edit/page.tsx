import EditForm from "@/app/components/EditForm";
import { fetchUserById } from "@/lib/data";
export default async function (props: { params: Promise<{ person: string }> }) {
  const params = await props.params;
  const id = params.person;
  const user = await fetchUserById(id);

  return (
    <>
      <main className="flex flex-col min-h-screen justify-center items-center gap-10">
        <h1 className="font-bold text-6xl underline">EDIT USER</h1>
        <div className="p-8 bg-[#ffdb58] rounded-lg shadow-[8px_8px_0_rgb(0,0,0,0.8)] max-w-3xl w-full">
          <EditForm user={user} />
        </div>
      </main>
    </>
  );
}
