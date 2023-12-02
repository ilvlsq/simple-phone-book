import PhonesTable from "../components/PhonesTable";
import { getContacts } from "../api/contact-book/contactsActions";
import AddPhoneNumber from "../components/AddPhoneNumber";

export default async function PhoneNumbers() {
  const contaktsForTable = await getContacts();

  return (
    <>
      <PhonesTable contaktsForTable={contaktsForTable} />
      <AddPhoneNumber />
    </>
  );
}
