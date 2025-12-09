"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

export async function createUser(formData: FormData) {
  const rawFormData = Object.fromEntries(formData);
  const bday = new Date(
    `${rawFormData.month}-${rawFormData.day}-${rawFormData.year}`
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log(rawFormData);

  const res = await fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: rawFormData.first,
      last_name: rawFormData.last,
      email: rawFormData.email,
      birthday: bday,
    }),
  });

  redirect("/people");
}

export async function deleteUser(id: string) {
  try {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to delete user");
    }
  } catch (error) {
    console.error("Error: ", error);
  }

  redirect("/people");
}
