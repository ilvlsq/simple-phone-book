"use client";
import React, { useState, useEffect } from "react";

export default function AddBirthdays() {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [isSpined, SetSpined] = useState(false);

  const handleActive = () => {
    setIsActive(true);
    if (isActive) {
      setDate("");
      setName("");
      setIsActive(false);
    }
  };

  useEffect(() => {
    const year = new Date().getFullYear();
    const minDateString = `${year}-01-01`;
    const maxDateString = `${year}-12-31`;

    setMinDate(minDateString);
    setMaxDate(maxDateString);
  }, []);

  async function handleAddBirthday() {
    if (date && name.trim() !== "") {
      SetSpined(true);
      const newBirthday = { name, date };
      console.log(newBirthday);
      await fetch("http://localhost:3000/api/birthdays", {
        method: "POST",
        body: JSON.stringify(newBirthday),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setDate("");
      setName("");
      SetSpined(false);
      window.location.reload();
    }
  }

  return (
    <>
      <div className="card w-72 h-80 bg-primary glass shadow-inner mx-auto mt-11 border-dashed border-4 border-secondary">
        <div className="card-body mt--4">
          {(isActive && (
            <>
              <input
                type="text"
                placeholder="Type Name"
                className="input input-bordered input-secondary w-full max-w-xs"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <input
                type="date"
                min={minDate}
                max={maxDate}
                className="input input-bordered input-secondary w-full max-w-xs"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
              <button
                className="btn btn-outline btn-success"
                onClick={handleAddBirthday}
              >
                {(isSpined && (
                  <span className="loading loading-spinner"></span>
                )) ||
                  "Success"}
              </button>
              <button
                className="btn btn-outline btn-warning mt-3"
                onClick={handleActive}
              >
                Cancel
              </button>
            </>
          )) || (
            <button
              className="h-60 btn btn-outline btn-primary border-dashed"
              onClick={handleActive}
            >
              <span className="text-black ">Hover me!</span>
              Click me for Add bithday!
            </button>
          )}
        </div>
      </div>
    </>
  );
}
