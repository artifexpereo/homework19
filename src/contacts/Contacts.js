import React, { useState } from "react";
import Contact from "../contact/Contact";
import "./Contacts.css";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

const Contacts = () => {
  const [state, ,] = useState({ contacts });
  const [search, setSearch] = useState("");
  const filteredContacts = search
    ? state.contacts.filter((item) =>
        item.lastName.toUpperCase().includes(search.toUpperCase())
      )
    : state.contacts;
  return (
    <div className="contacts">
      <input
        className="contacts__search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      {filteredContacts.map((item, index) => (
        <div key={index}>
          <div className="person">
            <Contact contact={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
