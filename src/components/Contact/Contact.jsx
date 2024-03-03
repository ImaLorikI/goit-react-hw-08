import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
// import { deleteContact } from '../../redux/contactsSlice';
import { fetchDeleteContact } from '../../redux/operation';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { IoPersonSharp } from 'react-icons/io5';

export const Contact = ({ contact }) => {
  const { id, name, phone } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(fetchDeleteContact(id));
  return (
    <>
      <div className={css.div}>
        <li className={css.li}>
          <div>
            <p className={css.items}>{name}</p>
            <p className={css.items}>{phone}</p>
          </div>
          <button className={css.button} onClick={handleDelete}>
            Delate
          </button>
        </li>
      </div>
    </>
  );
};
