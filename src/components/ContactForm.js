import React, { Component } from 'react';
import PropsType from 'prop-types';
import { v4 as uuid } from 'uuid';
import './ContactForm.css';

class ContactForm extends Component {
  nameId = uuid();
  numberId = uuid();

  state = {
    name: '',
    number: '',
  };

  formChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = event => {
    event.preventDefault();
    const contact = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(contact);
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="contacts__form" onSubmit={this.formSubmit}>
        <label className="contcts__form-label" htmlFor={this.nameId}>
          Name
          <input
            className="contcts__form-input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.formChange}
            id={this.nameId}
          />
        </label>
        <label className="contcts__form-label" htmlFor={this.numberId}>
          Number
          <input
            className="contcts__form-input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.formChange}
            id={this.numberId}
          />
        </label>
        <button className="contacts__form-button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.PropsType = {
  onSubmit: PropsType.func.isRequired,
};

export default ContactForm;
