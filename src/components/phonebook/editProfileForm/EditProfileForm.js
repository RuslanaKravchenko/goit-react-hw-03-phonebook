// ============================ hooks ==================================
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditProfileStyled from './EditProfileFormStyled';

const initialState = {
  name: '',
  number: '',
  category: '',
  dateOfBirth: '',
  email: '',
};

const EditProfileForm = ({
  contactById,
  setEditProfileOpen,
  setContacts,
  contacts,
}) => {
  const [contact, setContact] = useState({ ...initialState, ...contactById });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const onHadleSubmit = e => {
    e.preventDefault();
    setEditProfileOpen(false);
    setContacts([
      ...contacts.map(item => (item.id === contact.id ? { ...contact } : item)),
    ]);
  };

  return (
    <EditProfileStyled>
      <h2 className="profile_title">Profile</h2>
      <form className="profile_form" onSubmit={onHadleSubmit}>
        <label className="profile_fild">
          <span className="profile_text"> Name:</span>

          <input
            className="profile_input"
            type="text"
            name="name"
            value={contact.name}
            onChange={onHandleChange}
          />
        </label>
        <label className="profile_fild">
          <span className="profile_text">Number:</span>

          <input
            className="profile_input"
            type="tel"
            name="number"
            value={contact.number}
            onChange={onHandleChange}
          />
        </label>

        <label className="profile_fild">
          <span className="profile_text">Email:</span>

          <input
            className="profile_input"
            type="email"
            name="email"
            value={contact.email}
            onChange={onHandleChange}
          />
        </label>

        <label className="profile_fild-category">
          <span className="profile_category-text">Category:</span>

          <select
            className="select-css"
            name="category"
            value={contact.category}
            onChange={onHandleChange}
          >
            <option value="">...</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="work">Work</option>
            <option value="others">Others</option>
          </select>
        </label>
        <label className="profile_fild-date">
          <span className="profile_date-text">Date of birth:</span>

          <input
            className="profile_date"
            type="date"
            name="dateOfBirth"
            value={contact.dateOfBirth}
            onChange={onHandleChange}
          ></input>
        </label>

        <button className="info_btn " type="submit">
          Save
        </button>
      </form>
    </EditProfileStyled>
  );
};

export default EditProfileForm;

EditProfileForm.propTypes = {
  contactById: PropTypes.object.isRequired,
  setEditProfileOpen: PropTypes.func.isRequired,
  setContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

// =============================== class components ======================================

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import EditProfileStyled from './EditProfileFormStyled';

// const initialState = {
//   name: '',
//   number: '',
//   category: '',
//   dateOfBirth: '',
//   email: '',
// };

// class EditProfileForm extends Component {
//   static propTypes = {
//     contactById: PropTypes.object.isRequired,
//     setEditProfileOpen: PropTypes.func.isRequired,
//     setContacts: PropTypes.func.isRequired,
//     contacts: PropTypes.array.isRequired,
//   };
//   state = {
//     contact: {
//       ...initialState,
//       ...this.props.contactById,
//     },
//   };

//   onHandleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ contact: { ...this.state.contact, [name]: value } });
//   };

//   onHadleSubmit = e => {
//     e.preventDefault();
//     this.props.setEditProfileOpen(false);
//     this.props.setContacts([
//       ...this.props.contacts.map(item =>
//         item.id === this.state.contact.id ? { ...this.state.contact } : item,
//       ),
//     ]);
//   };

//   render() {
//     const { contact } = this.state;
//     return (
//       <EditProfileStyled>
//         <h2 className="profile_title">Profile</h2>
//         <form className="profile_form" onSubmit={this.onHadleSubmit}>
//           <label className="profile_fild">
//             <span className="profile_text"> Name:</span>

//             <input
//               className="profile_input"
//               type="text"
//               name="name"
//               value={contact.name}
//               onChange={this.onHandleChange}
//             />
//           </label>
//           <label className="profile_fild">
//             <span className="profile_text">Number:</span>

//             <input
//               className="profile_input"
//               type="tel"
//               name="number"
//               value={contact.number}
//               onChange={this.onHandleChange}
//             />
//           </label>

//           <label className="profile_fild">
//             <span className="profile_text">Email:</span>

//             <input
//               className="profile_input"
//               type="email"
//               name="email"
//               value={contact.email}
//               onChange={this.onHandleChange}
//             />
//           </label>

//           <label className="profile_fild-category">
//             <span className="profile_category-text">Category:</span>

//             <select
//               className="select-css"
//               name="category"
//               value={contact.category}
//               onChange={this.onHandleChange}
//             >
//               <option value="">...</option>
//               <option value="family">Family</option>
//               <option value="friends">Friends</option>
//               <option value="work">Work</option>
//               <option value="others">Others</option>
//             </select>
//           </label>
//           <label className="profile_fild-date">
//             <span className="profile_date-text">Date of birth:</span>

//             <input
//               className="profile_date"
//               type="date"
//               name="dateOfBirth"
//               value={contact.dateOfBirth}
//               onChange={this.onHandleChange}
//             ></input>
//           </label>

//           <button className="info_btn " type="submit">
//             Save
//           </button>
//         </form>
//       </EditProfileStyled>
//     );
//   }
// }

// export default EditProfileForm;
