import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactRequest } from 'redux/contacts/operations';

import { toast } from 'react-toastify';
import { Button } from 'components/styles/Button.styled';
import { NameNumberWrapper, StyledIconItem } from './ContactItems.styled';

export const ContactItems = ({ name, number, id }) => {
  const dispatch = useDispatch();

  let formattedPhone = number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

  const handleDelete = id => {
    dispatch(deleteContactRequest(id));
    toast.success(`Contact ${name} successful deleted!`);
  };

  return (
    <>
      <NameNumberWrapper>
        <StyledIconItem />
        <span>{name}:</span>
        <span>{formattedPhone}</span>
      </NameNumberWrapper>
      <Button
        type="button"
        className="btn btn-outline-primary btn-sm"
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>
    </>
  );
};

ContactItems.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
