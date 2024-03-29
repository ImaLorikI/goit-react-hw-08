import { useDispatch } from 'react-redux';
// import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { useEffect } from 'react';
import { getContacts } from '../redux/contact/operation';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <main>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </main>
  );
};
export default Contacts;
