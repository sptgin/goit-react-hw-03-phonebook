import PropTypes from 'prop-types';
import './ContactListItem.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className="contact__list-item">
      <div>
        {name}: {number}
      </div>
      <button
        className="contact__list-delete-button"
        type="submit"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
