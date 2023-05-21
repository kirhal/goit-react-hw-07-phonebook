// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import css from './App.module.css';

import Section from './section/Section';
import AddContacts from './phonebook/AddContacts';
import MapContacts from './contacts/RenderContacts';
import FilterContacts from './filter/FilterContacts';

export default function App() {
  const { data, isLoading, error } = useSelector(getContacts);
  const contacts = useSelector(state => state.contacts.data);

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <AddContacts />
      </Section>
      <Section title="Contacts">
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
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
