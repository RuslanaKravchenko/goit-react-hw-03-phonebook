import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './contactListItem/ContactListItem';

const ContactList = ({
  contacts,
  deleteContact,
  getContactById,
  setEditProfileOpen,
  setContactInfoOpen,
}) => {
  return (
    <ul className="list">
      {contacts.map(item => (
        <ContactListItem
          item={item}
          key={item.id}
          deleteContact={deleteContact}
          getContactById={getContactById}
          setEditProfileOpen={setEditProfileOpen}
          setContactInfoOpen={setContactInfoOpen}
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
