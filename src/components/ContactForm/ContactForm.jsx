import { Formik, Form, Field } from 'formik';
import css from 'components/ContactForm/ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const handelSubmit = (values, { resetForm }) => {
    resetForm();
    onSubmit(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handelSubmit}>
      <Form>
        <label htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor="number">
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
