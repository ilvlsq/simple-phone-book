"use client";
import React, { useState } from "react";

export default function AddPhoneNumber() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSpined, SetSpined] = useState(false);

  async function handleAddContact() {
    if (
      name.trim() !== "" &&
      lastName.trim() !== "" &&
      phoneNumber.length > 8
    ) {
      SetSpined(true);
      const newContact = { name, lastName, phoneNumber };
      await fetch("http://localhost:3000/api/contact-book", {
        method: "POST",
        body: JSON.stringify(newContact),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setName("");
      setLastName("");
      setPhoneNumber("");
      SetSpined(false);
      window.location.reload();
    } else console.log("Error");
  }

  return (
    <>
      <div className="max-w-3xl mx-auto mt-5 mb-20 p-2">
        <span className="text-2xl">Please fill in the fields</span>
        <table className="table rounded-lg ring-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr className="mx-auto">
              <td>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered input-md w-full max-w-xs"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered input-md w-full max-w-xs"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </td>
              <td>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered input-md w-full max-w-xs"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
              </td>
              <td>
                <button className="btn btn-outline" onClick={handleAddContact}>
                  {(isSpined && (
                    <span className="loading loading-spinner"></span>
                  )) ||
                    "submit"}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
