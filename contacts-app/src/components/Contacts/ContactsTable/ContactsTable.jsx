import React, { useState } from "react";
import ContactsRow from "../ContactsRow/ContactsRow";

const ContactsTable = () => {
  const [isFavoritesShown, setIsFavoritesShown] = useState(false);

  const [contactsData, setContactsData] = useState([
    {
      id: 1, name: "Stefan", email: "s.sumar@vega.dev", isFavorite: true
    },
    {
      id: 2, name: "Stefan", email: "s.sumar@vega.dev", isFavorite: false
    },
    {
      id: 3, name: "Stefan", email: "s.sumar@vega.dev", isFavorite: true
    },
  ]);

  const handleChangeFavorite = (id) => {
    const newList = contactsData
      .map((contact) => {
        if (contact.id === id) {
          const updatedItem = {
            ...contact,
            isFavorite: !contact.isFavorite,
          };

          return updatedItem;
        }

        return contact;
      });

    setContactsData(newList);
  };

  const contactRows = contactsData
    .map(contact => (
      <ContactsRow
        key={contact.id}
        id={contact.id}
        name={contact.name}
        email={contact.email}
        isFavorite={contact.isFavorite}
        handleChangeFavorite={handleChangeFavorite} />
    ));

  const favoritesRows = contactsData
    .filter(contact => contact.isFavorite)
    .map(contact =>
      <ContactsRow
        key={contact.id}
        id={contact.id}
        name={contact.name}
        email={contact.email}
        isFavorite={contact.isFavorite}
        handleChangeFavorite={handleChangeFavorite} />
    );

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>
              <button onClick={() => setIsFavoritesShown(current => !current)}>
                {isFavoritesShown ? "Show All" : "Show Favorites"}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {isFavoritesShown ? favoritesRows : contactRows}
        </tbody>
      </table>
    </>);
};

export default ContactsTable;
