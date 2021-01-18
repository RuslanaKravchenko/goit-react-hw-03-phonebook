import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './contactListItem/ContactListItem';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="list">
      {contacts.map(item => (
        <ContactListItem
          item={item}
          key={item.id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;

ContactListItem.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func.isRequired,
};
