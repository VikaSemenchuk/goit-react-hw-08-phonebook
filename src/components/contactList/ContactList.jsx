import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactItems } from 'components/contactItems/ContactItems';
import { StyledItem } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <StyledItem key={id}>
          <ContactItems id={id} name={name} number={number} />
        </StyledItem>
      ))}
    </ul>
  );
};
