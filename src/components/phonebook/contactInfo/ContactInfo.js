import React from 'react';
import PropTypes from 'prop-types';
import ContactInfoStyled from './ContactInfoStyled';

const ContactInfo = ({ contact }) => {
  const { name, number, email, category, dateOfBirth } = contact;
  return (
    <ContactInfoStyled>
      <h2 className="info_name">{name}</h2>
      {category && <p className="info_category">{category}</p>}

      <ul className="list info_list">
        <li className="info_item">
          <span className="info_label">Number:</span>
          <span className="info_dots"></span>
          <span className="info_contact">{number}</span>
        </li>
        <li className="info_item">
          <span className="info_label">Email:</span>
          <span className="info_dots"></span>
          <span className="info_contact">{email}</span>
        </li>
      </ul>
      <p className="info_dateOfBirth">
        <span className="info_dateOfBirth-label">Date of birth:</span>
        <span className="info_dots"></span>
        <span className="info_dateOfBirth-date">{dateOfBirth}</span>
      </p>

      <div className="info_links">
        <a className="info_call info_link" href={`tel:${number}`}>
          Call
        </a>
        <a className="info_message info_link" href={`mailto:${email}`}>
          Message
        </a>
      </div>
    </ContactInfoStyled>
  );
};

export default ContactInfo;

ContactInfo.propTypes = {
  contact: PropTypes.object.isRequired,
};
