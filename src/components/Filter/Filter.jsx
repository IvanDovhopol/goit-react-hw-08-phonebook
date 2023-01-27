import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from 'redux/contacts/filtersSlice';
import { selectContacts } from 'redux/contacts/selectors';
import { Input, Label } from './styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function changeFilter(e) {
    dispatch(filteredContacts(e.target.value));
  }

  return (
    <>
      {contacts.length > 0 && (
        <Label>
          Find contact
          <Input
            type="text"
            onChange={changeFilter}
            placeholder="search by name or number"
          />
        </Label>
      )}
    </>
  );
};
