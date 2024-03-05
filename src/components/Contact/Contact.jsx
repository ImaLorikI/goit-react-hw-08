import { FaPerson } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';

import css from './Contact.module.css';
import { deleteContacts } from '../../redux/contact/operation';
import { useDispatch } from 'react-redux';

export const Contact = ({ dataContact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const onClickDeleteContact = () => dispatch(deleteContacts(id));

  return (
    <>
      <li className={css.wrapper}>
        <div className={css.information}>
          <div className={css.text}>
            <FaPerson />
            <p>{name}</p>
          </div>
          <div className={css.text}>
            <FaPhoneAlt />
            <p>{number}</p>
          </div>
        </div>
        <button className={css.button} onClick={onClickDeleteContact}>
          Delete
        </button>
      </li>
    </>
  );
};
