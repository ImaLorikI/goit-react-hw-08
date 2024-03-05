import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContacts } from '../redux/contact/operation';

export const Contact = ({ dataContact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const onClickDeleteContact = () => dispatch(deleteContacts(id));

  return (
    <>
      <li className={css.wrapper}>
        <div className={css.information}>
          <div className={css.text}>
            <p>{name}</p>
          </div>
          <div className={css.text}>
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
