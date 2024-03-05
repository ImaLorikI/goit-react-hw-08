import { useSelector } from 'react-redux';

import { Contact } from '../Contact/Contact';

import css from './ContactList.module.css';
import { selectDataContacts, selectFilter } from '../../redux/contact/selector';

export const ContactList = () => {
  const contacts = useSelector(selectDataContacts);
  const filters = useSelector(selectFilter);
  const filterContacts = contacts.filter(data => {
    return data.name.toLowerCase().includes(filters.toLowerCase());
  });
  return (
    <ul className={css.list}>
      {filterContacts.length > 0 ? (
        filterContacts.map(data => {
          return <Contact key={data.id} dataContact={data} />;
        })
      ) : (
        <li>You have not added any contacts</li>
      )}
    </ul>
  );
};
