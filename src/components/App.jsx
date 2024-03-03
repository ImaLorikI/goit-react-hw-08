import { ContactForm } from './ContactForm/ContactForm';
import { SearchBar } from './SearchBar/SearchBar';
import ContactList from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operation';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </>
  );
};
