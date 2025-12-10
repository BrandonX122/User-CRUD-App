"use server";

import { FieldError } from "@/components/ui/field";
import { error } from "console";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    first_name?: string[];
    last_name?: string[];
    email?: string[];
    month?: string[];
    day?: string[];
    year?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.email({ message: "Please enter a valid email address" }),
  month: z.string().min(2, "Select a month"),
  day: z.string().min(2, "Select a day"),
  year: z.string().min(2, "Select a year"),
});

const CreateUser = FormSchema.omit({ id: true });
const EditUser = FormSchema.omit({ id: true });
export async function createUser(prevState: State, formData: FormData) {
  const validatedFields = CreateUser.safeParse({
    first_name: formData.get("first"),
    last_name: formData.get("last"),
    email: formData.get("email"),
    month: formData.get("month"),
    day: formData.get("day"),
    year: formData.get("year"),
  });

  if (!validatedFields.success) {
    return {
      errors: z.flattenError(validatedFields.error).fieldErrors,
      message: "Missing Fields, Failed to Create User.",
    };
  }
  const bday = new Date(
    `${validatedFields.data.month}-${validatedFields.data.day}-${validatedFields.data.year}`
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const res = await fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: validatedFields.data.first_name,
      last_name: validatedFields.data.last_name,
      email: validatedFields.data.email,
      birthday: bday,
    }),
  });

  redirect("/people");
}

export async function editUser(
  id: string,
  prevState: State,
  formData: FormData
) {
  const validatedFields = EditUser.safeParse({
    first_name: formData.get("first"),
    last_name: formData.get("last"),
    email: formData.get("email"),
    month: formData.get("month"),
    day: formData.get("day"),
    year: formData.get("year"),
  });

  if (!validatedFields.success) {
    return {
      errors: z.flattenError(validatedFields.error).fieldErrors,
      message: "Missing Fields, Failed to Update User.",
    };
  }

  const bday = new Date(
    `${validatedFields.data.month}-${validatedFields.data.day}-${validatedFields.data.year}`
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  try {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: validatedFields.data.first_name,
        last_name: validatedFields.data.last_name,
        email: validatedFields.data.email,
        birthday: bday,
      }),
    });
  } catch (error) {
    return { message: "Server Error: Failed to update user." };
  }

  redirect(`/people/${id}`);
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
