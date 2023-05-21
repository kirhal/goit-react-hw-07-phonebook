import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
// import { selectContacts } from 'redux/selectors';

import css from './App.module.css';

import Section from './section/Section';
import AddContacts from './phonebook/AddContacts';
import MapContacts from './contacts/RenderContacts';
import FilterContacts from './filter/FilterContacts';

export default function App() {
  // const { data, isLoading, error } = useSelector(selectContacts);
  const contacts = useSelector(state => state.contacts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <AddContacts />
      </Section>
      <Section title="Contacts">
        {/* {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>} */}
        {/* Change for DATA */}
        {contacts.length !== 0 && (
          <>
            <FilterContacts />
            <MapContacts />
          </>
        )}
      </Section>
    </div>
  );
}
