import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterNumber } from '../../redux/contact/filtersSlice';
import css from './SearchBar.module.css';
export const SearchBar = () => {
  const id = useId();
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  const onSearch = evt => {
    dispatch(filterNumber(evt.target.value));
  };

  return (
    <div className={css.search}>
      <label htmlFor={id}>Find contact by name</label>
      <input
        type="text"
        id={id}
        className={css.input}
        onChange={onSearch}
        placeholder="Search"
        name="search"
        value={value}
      />
    </div>
  );
};
