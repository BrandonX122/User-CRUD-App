import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { createUser } from "@/lib/action";
export default function UserForm() {
  const currentYear = new Date().getFullYear();
  return (
    <form action={createUser}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="first">First Name:</FieldLabel>
            <input
              required
              id="first"
              name="first"
              placeholder="John"
              type="text"
              className="border-black border-4 outline-none rounded px-3 py-2 w-full"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="last">Last Name:</FieldLabel>
            <input
              required
              id="last"
              name="last"
              placeholder="Doe"
              type="text"
              className="border-black border-4 outline-none rounded px-3 py-2 w-full"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email:</FieldLabel>
            <input
              required
              id="email"
              name="email"
              placeholder="Email"
              className="border-black border-4 outline-none rounded px-3 py-2 w-full"
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSet>
        <FieldGroup>
          <div className="grid grid-cols-3 gap-4">
            <Field>
              <FieldLabel htmlFor="month">Month:</FieldLabel>
              <select required id="month" name="month">
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
            </Field>
            <Field>
              <FieldLabel htmlFor="day">Day:</FieldLabel>
              <select required name="day" id="day">
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
            </Field>
            <Field>
              <FieldLabel htmlFor="year">Year:</FieldLabel>
              <select required id="year" name="year">
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
