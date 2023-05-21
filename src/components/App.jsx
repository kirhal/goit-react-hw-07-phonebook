import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts } from 'redux/seleclors';

import css from './App.module.css';

import Section from './section/Section';
import AddContacts from './phonebook/AddContacts';
import RenderContacts from './contacts/RenderContacts';
import FilterContacts from './filter/FilterContacts';

export default function App() {
  const { data, isLoading, error } = useSelector(selectContacts);
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
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {data.length !== 0 && (
          <>
            <FilterContacts />
            <RenderContacts />
          </>
        )}
      </Section>
    </div>
  );
}
