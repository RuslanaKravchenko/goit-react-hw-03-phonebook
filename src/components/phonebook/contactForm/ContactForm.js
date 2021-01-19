// ============================ hooks =================================
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Form from './ContactFormStyled';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const [state, setState] = useState({ ...initialState });

  const onHandelChange = e => {
    const name = e.target.name;
    setState(prevState => ({ ...prevState, [name]: e.target.value }));
  };

  const onHandelSubmit = e => {
    e.preventDefault();
    const user = {
      id: uuidv4(),
      name: state.name,
      number: state.number,
    };

    addContact(user);
    if (state.name && state.number) {
      setState({ ...initialState });
    }
  };

  return (
    <Form onSubmit={onHandelSubmit}>
      <label className="form_fild">
        <span className="form_text">Name: </span>
        <input
          className="form_input"
          placeholder="Enter name..."
          type="text"
          name="name"
          value={state.name}
          onChange={onHandelChange}
        ></input>
      </label>
      <label className="form_fild">
        <span className="form_text">Number: </span>
        <input
          className="form_input"
          placeholder="+38(067)-111-11-11"
          type="tel"
          name="number"
          value={state.number}
          onChange={onHandelChange}
        ></input>
      </label>
      <button className="form_btn" type="submit">
        Add contact
      </button>
    </Form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

// ============================= class components ===================================
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
// import Form from './ContactFormStyled';

// class ContactForm extends Component {
//   static propTypes = {
//     addContact: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   onHandelChange = e => {
//     const name = e.target.name;
//     this.setState({ [name]: e.target.value });
//   };

//   onHandelSubmit = e => {
//     e.preventDefault();
//     const user = {
//       id: uuidv4(),
//       name: this.state.name,
//       number: this.state.number,
//     };

//     this.props.addContact(user);
//     if (this.state.name && this.state.number) {
//       this.setState({ name: '', number: '' });
//     }
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form onSubmit={this.onHandelSubmit}>
//         <label className="form_fild">
//           <span className="form_text">Name: </span>
//           <input
//             className="form_input"
//             placeholder="Enter name..."
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.onHandelChange}
//           ></input>
//         </label>
//         <label className="form_fild">
//           <span className="form_text">Number: </span>
//           <input
//             className="form_input"
//             placeholder="+38(067)-111-11-11"
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.onHandelChange}
//           ></input>
//         </label>
//         <button className="form_btn" type="submit">
//           Add contact
//         </button>
//       </Form>
//     );
//   }
// }

// export default ContactForm;
