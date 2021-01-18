import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ContactsListItemStyled';

const ContactListItem = ({ item, deleteContact }) => {
  return (
    <ListItem>
      <div>
        <p className="listItem_name">{item.name}: </p>
        <p className="listItem_number">{item.number}</p>
      </div>

      <button
        type="button"
        className="material-icons listItem_btn"
        data-id={item.id}
        onClick={deleteContact}
      >
        <svg
          className="listItem_icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="25px"
          height="25px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z" />
        </svg>
      </button>
    </ListItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
