import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { getContactsRequest } from 'redux/contacts/operations';
import {
  selectContactError,
  selectContacts,
  selectContactStatus,
} from 'redux/contacts/selectors';
import WithAuthRedirect from 'HOC/WithAuthRedirect';

import Loader from 'components/loader/Loader';
import { ContactForm } from 'components/contactForm/ContactForm';
import { Filter } from 'components/filter/Filter';
import { ContactList } from 'components/contactList/ContactList';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectContacts);
  const status = useSelector(selectContactStatus);
  const error = useSelector(selectContactError);

  useEffect(() => {
    if (!isLoggedIn) return;

    dispatch(getContactsRequest());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (error) {
      toast.error('Sorry, something went wrong');
    }
  }, [error]);
  return (
    <>
      {status === 'pending' && <Loader />}

      <section className="section">
        <div className="container">
          <h1 className="title">Add your contacts</h1>
          <ContactForm />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">Contacts</h2>

          {!error && contacts?.length ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <>
              <p>You still haven't any contacts</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default WithAuthRedirect(ContactsPage, '/login');
