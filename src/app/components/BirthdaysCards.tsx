"use client";
import React, { useState, useEffect } from "react";

export default function BirthdaysCards({ birthdaysForTable }: any) {
  const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    const sortedBirthdays = [...birthdaysForTable].sort((a, b) => {
      //@ts-ignore
      return new Date(a.date) - new Date(b.date);
    });

    setBirthdays(sortedBirthdays as any);
  }, [birthdaysForTable]);

  async function handleDelete(deleteBirthdayId: any) {
    await fetch(`http://localhost:3000/api/birthdays`, {
      method: "DELETE",
      body: JSON.stringify(deleteBirthdayId),
    });

    window.location.reload();
  }

  return (
    <>
      {birthdays.map((birthday: any) => (
        <div
          key={birthday.id}
          className="card w-72 h-80 bg-gradient-to-r from-primary-content glass shadow-inner mx-auto mt-11 border-dashed border-4 border-primary"
        >
          <div className="card-body text-2xl text-red-200 ">
            {birthday.name} <span className="text-white"> birthday on </span>
            <span>{birthday.date}</span>
          </div>
          <button
            className="btn btn-outline btn-error mb-5 w-48 mx-auto"
            onClick={() => handleDelete(birthday.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
