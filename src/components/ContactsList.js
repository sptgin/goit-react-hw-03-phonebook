import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import './ContactsList.css';

const ContactsList = ({ findContact, onDeleteContact }) => {
  return (
    <ul className="contact__list">
      {findContact().map(({ id, name, number }) => {
        return (
          <ContactListItem
            className="contacts__list-item"
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactsList.prototype = {
  findContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
