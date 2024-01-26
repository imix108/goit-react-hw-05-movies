import PropTypes from 'prop-types';

import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button } from './SearchInput.styled';

export const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return alert('Please enter the name of the movie');
    }
    onSearch(query);
    // setQuery('');
  };
  return (
    <div>
      <form
        style={{
          textAlign: 'left',
          paddingTop: 20,
          paddingBottom: 20,
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Movie Name"
          name="query"
          value={query}
          onChange={changeQuery}
        />
        <Button type="submit">
          <AiOutlineSearch size="15" />
        </Button>
      </form>
    </div>
  );
};
export default SearchInput;
SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
