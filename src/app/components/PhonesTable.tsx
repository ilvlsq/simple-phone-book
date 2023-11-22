import AddPhoneNumber from "./AddPhoneNumber";

export default function PhonesTable() {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-10 ">
        <table className="table rounded-lg ring-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Phoone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <AddPhoneNumber />
          </tbody>
        </table>
      </div>
    </>
  );
}
