import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { handleFilter } from 'redux/contacts/contactsSlice';
import css from './Filter.module.css';
import { Input } from 'components/styles/Form.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  function onChangeFilter({ target: { value } }) {
    dispatch(handleFilter(value));
  }

  return (
    <div className={css.filter}>
      <Input
        type="text"
        name="filter"
        className="form-control"
        placeholder="Find contacts by name"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};
