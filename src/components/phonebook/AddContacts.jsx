import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { pushContact } from 'redux/contactsSlice';
import { selectContactsList } from 'redux/seleclors';

import css from './AddContacts.module.css';

Notify.init({
  fontSize: '20px',
  width: '400px',
  position: 'top-center',
  cssAnimationDuration: 500,
  cssAnimationStyle: 'zoom',
});

export default function AddContacts() {
  // const contacts = useSelector(state => state.contacts.data);
  const dispatch = useDispatch();

  const addContact = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;
    const currentSubmit = {
      name: nameValue,
      number: numberValue,
      id: nanoid(),
    };
    if (checkOriginalNames(selectContactsList, nameValue)) {
      Notify.failure(`❌ ${nameValue} is already in contacts list`);
    } else {
      dispatch(pushContact(currentSubmit));
    }
    form.reset();
  };

  const checkOriginalNames = (contacts, inputValue) => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === inputValue.toLowerCase()
    );
  };

  return (
    <form className={css.form} onSubmit={addContact}>
      <input
        type="text"
        name="name"
        className={css['form-input']}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Write name"
      />
      <input
        type="tel"
        name="number"
        className={css['form-input']}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Write number"
      />
      <button type="submit" className={css['form-button']}>
        Add contact
      </button>
    </form>
  );
}
