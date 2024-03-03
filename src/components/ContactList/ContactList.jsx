import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { getContacts, getFilter } from '../../redux/selector';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  const filterContacts = contacts.filter(data => {
    return data.name.toLowerCase().includes(filters.toLowerCase());
  });

  return (
    <div>
      <h2>Contact List</h2>
      <ul className={css.list}>
        {filterContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
