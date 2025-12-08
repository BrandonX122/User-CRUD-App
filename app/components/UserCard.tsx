import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { calculateAge } from "@/lib/utils";

export default function UserCard({
  first,
  last,
  bday,
  person,
}: {
  first: string;
  last: string;
  bday: string;
  person: string;
}) {
  return (
    <>
      <Link href={`/people/${person}`}>
        <Card
          className="shadow-[8px_8px_0_rgb(0,0,0,0.8)]     transition-all duration-200
    hover:shadow-[4px_4px_0_rgb(0,0,0,0.8)]
    hover:translate-x-1 hover:translate-y-1 hover:cursor-pointer"
        >
          <CardHeader>
            <CardTitle>
              <span className="underline">
                {first} {last?.[0] ?? ""}
              </span>{" "}
              is...
            </CardTitle>
          </CardHeader>
          <CardContent className="font-bold">{calculateAge(bday)}</CardContent>
        </Card>
      </Link>
    </>
  );
}
