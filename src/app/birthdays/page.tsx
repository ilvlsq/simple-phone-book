import AddBirthdays from "../components/AddBirthdays";
import BirthdaysCards from "../components/BirthdaysCards";
import { getBirthdays } from "../api/birthdays/birthdaysActions";

export default async function Birthdays() {
  const birthdaysForTable = await getBirthdays();

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <BirthdaysCards birthdaysForTable={birthdaysForTable} />
        <AddBirthdays />
      </div>
    </>
  );
}
