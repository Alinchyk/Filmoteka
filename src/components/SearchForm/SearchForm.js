import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SearchButton, Form, SearchInput } from './SearchForm.styled';

const SearchForm = ({ movieName, queryParams }) => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.movie.value;
    if (query.trim() === '') {
      toast.error('Enter the query correctly...', { theme: 'colored' });
      return;
    }
    queryParams.set('query', query);
    queryParams.delete('page');
    navigate(`?${queryParams.toString()}`, { replace: true });
    e.target.movie.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="movie"
        placeholder="Enter the movie..."
        autoComplete="off"
        defaultValue={movieName}
      />
      <SearchButton type="submit" variant="outlined" size="small">
        Search
      </SearchButton>
    </Form>
  );
};

export default SearchForm;
