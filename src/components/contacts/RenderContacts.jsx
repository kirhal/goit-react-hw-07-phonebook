import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectContactsList, selectFilter } from 'redux/seleclors';

import css from './Contacts.module.css';

export default function MapContacts() {
  // const contacts = useSelector(state => state.contacts.data);
  // const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const removeContact = evt => {
    const contactId = evt.currentTarget.id;
    dispatch(deleteContact(contactId));
  };

  const filterContacts = () => {
    if (selectContactsList.length > 0) {
      return selectContactsList.filter(({ name }) =>
        name.toLowerCase().includes(selectFilter)
      );
    }
  };

  return (
    <ul className={css['contacts-list']}>
      {filterContacts().map(({ id, name, number }) => {
        return (
          <li key={id} className={css['contacts-list__item']}>
            <span className={css['contacts-list__data']}>
              {name}: {number}
              <button
                type="button"
                className={css['contacts-list__button']}
                id={id}
                onClick={removeContact}
              >
                Delete
              </button>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

//
