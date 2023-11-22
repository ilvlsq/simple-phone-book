"use client";
import React, { useState } from "react";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default async function AddPhoneNumber() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleAddRow = () => {
    const newContact = { name, lastName, phoneNumber };
    //console.log(newContact);
    setName("");
    setLastName("");
    setPhoneNumber("");
  };

  return (
    <>
      <tr>
        <th>n/f</th>
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
          <button className="btn btn-outline" onClick={handleAddRow}>
            submit
          </button>
        </td>
      </tr>
    </>
  );
}
