import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button } from './SearchInput.styled';
import PropTypes from 'prop-types';

export const SearchInput = ({ onSearch, value }) => {
  const [query, setQuery] = useState(value);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return alert('Please enter the name of the movie');
    }
    onSearch(query);
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
          autoComplete="off"
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

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string // Define the prop type for value
};

export default SearchInput;
