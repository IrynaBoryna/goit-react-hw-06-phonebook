import css from './contactList.module.css';
import { Item } from '../ContactListOne/contactListOne';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { getFilter, getContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ name, number, id }) => (
        <Item
          id={id}
          number={number}
          name={name}
          onClick={() => dispatch(deleteContacts(id))}
        />
      ))}
    </ul>
  );
};

ContactList.prototype = {
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.number,
  onDeleteContact: PropTypes.func,
};
