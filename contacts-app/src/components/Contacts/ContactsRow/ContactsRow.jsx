import React from "react";

const ContactsRow = (props) => {
  return <tr>
    <td>{props.name}</td>
    <td>{props.email}</td>
    <td>
      <button onClick={() => props.handleChangeFavorite(props.id)}>
        {props.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </td>
  </tr>;
};

export default ContactsRow;
