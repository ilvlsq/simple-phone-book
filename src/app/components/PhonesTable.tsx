"use client";
import React, { useState } from "react";

export default function PhonesTable({ contaktsForTable }: any) {
  const [sortedContacts, setSortedContacts] = useState(contaktsForTable);
  const [sortDirection, setSortDirection] = useState("asc");
  const [editableContctId, setEditableContctId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSpined, SetSpined] = useState(false);

  const handleSort = (columnName: any) => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    const sorted = [...sortedContacts].sort((a, b) => {
      if (columnName === "id") {
        return newSortDirection === "asc" ? a.id - b.id : b.id - a.id;
      } else if (newSortDirection === "asc") {
        return a[columnName].localeCompare(b[columnName]);
      } else {
        return b[columnName].localeCompare(a[columnName]);
      }
    });
    setSortedContacts(sorted);
    setSortDirection(newSortDirection);
  };

  const handleEdit = (contactId: any, currentName: any) => {
    setEditableContctId(contactId);
    setEditedName(currentName);
  };

  async function handleSave(contactId: any) {
    SetSpined(true);
    const editedContact = { contactId, editedName };
    await fetch(`http://localhost:3000/api/contact-book`, {
      method: "PUT",
      body: JSON.stringify(editedContact),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setEditableContctId(null);
    setEditedName("");
    SetSpined(false);
    window.location.reload();
  }

  const handleCancelEdit = () => {
    setEditableContctId(null);
    setEditedName("");
  };

  async function handleDelete(deleteContactId: any) {
    SetSpined(true);
    await fetch(`http://localhost:3000/api/contact-book`, {
      method: "DELETE",
      body: JSON.stringify(deleteContactId),
    });
    SetSpined(false);
    window.location.reload();
  }

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = sortedContacts.filter((sortedContact: any) =>
    sortedContact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        id="table_parent"
        className="rounded-lg ring-2 max-w-4xl max-h-80 mx-auto mt-10 overflow-y-auto p-2"
      >
        <input
          type="text"
          className="input input-bordered input-xs w-full max-w-xs"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <table className="table  m-1 ">
          <thead>
            <tr>
              <th onClick={() => handleSort("id")}>ID</th>
              <th onClick={() => handleSort("name")}>Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact: any) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>
                  {editableContctId === contact.id ? (
                    <input
                      className="input input-bordered input-xs w-full max-w-xs"
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    contact.name
                  )}
                </td>
                <td>{contact.lastname}</td>
                <td>{contact.phone}</td>
                <td>
                  {editableContctId === contact.id ? (
                    <>
                      <button
                        className="btn btn-outline btn-success mx-1"
                        onClick={() => handleSave(contact.id)}
                      >
                        {(isSpined && (
                          <span className="loading loading-spinner"></span>
                        )) ||
                          "Save"}
                      </button>
                      <button
                        className="btn btn-outline btn-warning"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-outline btn-info mx-1"
                        onClick={() => handleEdit(contact.id, contact.name)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-outline btn-error my-1"
                        onClick={() => handleDelete(contact.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
