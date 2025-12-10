"use client";

import { useActionState } from "react";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { createUser, State } from "@/lib/action";
export default function UserForm() {
  const currentYear = new Date().getFullYear();
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createUser, initialState);

  return (
    <form action={formAction}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="first">First Name:</FieldLabel>
            <input
              id="first"
              name="first"
              placeholder="John"
              type="text"
              className="border-black border-4 outline-none rounded px-3 py-2 w-full"
            />
            <div id="first-name-error">
              {state.errors?.first_name &&
                state.errors.first_name.map((error: string) => (
                  <p key={error} className="mt-1 text-sm text-red-500">
                    {error}
                  </p>
                ))}
            </div>
          </Field>

          <Field>
            <FieldLabel htmlFor="last">Last Name:</FieldLabel>
            <input
              id="last"
              name="last"
              placeholder="Doe"
              type="text"
              className="border-black border-4 outline-none rounded px-3 py-2 w-full"
            />
            <div id="last-name-error">
              {state.errors?.last_name &&
                state.errors.last_name.map((error: string) => (
                  <p key={error} className="mt-1 text-sm text-red-500">
                    {error}
                  </p>
                ))}
            </div>
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email:</FieldLabel>
            <input
              id="email"
              name="email"
              placeholder="Email"
              className="border-black border-4 outline-none rounded px-3 py-2 w-full"
            />
            <div id="email-error">
              {state.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p key={error} className="mt-1 text-sm text-red-500">
                    {error}
                  </p>
                ))}
            </div>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSet>
        <FieldGroup>
          <div className="grid grid-cols-3 gap-4">
            <Field>
              <FieldLabel htmlFor="month">Month:</FieldLabel>
              <select id="month" name="month">
                <option value="" hidden>
                  MM
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <div id="month-error">
                {state.errors?.month &&
                  state.errors.month.map((error: string) => (
                    <p key={error} className="mt-1 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
            </Field>
            <Field>
              <FieldLabel htmlFor="day">Day:</FieldLabel>
              <select name="day" id="day">
                <option value="" hidden>
                  DD
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <div id="day-error">
                {state.errors?.day &&
                  state.errors.day.map((error: string) => (
                    <p key={error} className="mt-1 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
            </Field>
            <Field>
              <FieldLabel htmlFor="year">Year:</FieldLabel>
              <select id="year" name="year">
                <option value="" hidden>
                  YYYY
                </option>
                {Array.from(
                  { length: currentYear - 1900 + 1 },
                  (_, i) => currentYear - i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <div id="year-error">
                {state.errors?.year &&
                  state.errors.year.map((error: string) => (
                    <p key={error} className="mt-1 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
      <div className="flex justify-center border-t-4 mt-3 border-black">
        <button
          type="submit"
          className="text-black font-bold outline-none px-4 py-2 mt-4 rounded-md border-4 border-black hover:cursor-pointer
                hover:border-white transition-all duration-300 "
        >
          Submit
        </button>
      </div>
    </form>
  );
}
