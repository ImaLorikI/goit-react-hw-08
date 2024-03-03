import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
// import { addContact } from '../../redux/contactsSlice';
import { fetchAddContact } from '../../redux/operation';

const dataSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required name'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
      'Must be only digits'
    )
    .required('Required number'),
});

export const ContactForm = () => {
  const nameFiealId = useId();
  const numberFiealId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      phone: values.number,
    };

    dispatch(fetchAddContact(newContact));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={dataSchema}
    >
      <Form className={css.form}>
        <div className={css.div}>
          <div className={css.items}>
            <label htmlFor={nameFiealId}> Username:</label>
            <Field className={css.input} type="text" name="name" id={nameFiealId}></Field>
            <ErrorMessage className={css.error} component="span" name="name" />
          </div>
          <div className={css.items}>
            <label className={css.label} htmlFor={numberFiealId}>
              Number:
            </label>
            <Field className={css.input} type="text" name="number" id={numberFiealId}></Field>
            <ErrorMessage className={css.error} component="span" name="number" />
          </div>
        </div>
        <button type="submit" className={css.button}>
          Add user
        </button>
      </Form>
    </Formik>
  );
};
