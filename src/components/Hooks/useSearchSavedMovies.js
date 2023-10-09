import { getSearchedMovies } from '../../utils/searchMovies';
import { useMemo, useState } from 'react';

export const useSearchSavedMovies = (movies) => {
  const [searchQuery, setSearchedQuery] = useState('');
  const search = (query) => {
    setSearchedQuery(query);
  };

  const searchedMovies = useMemo(
    () => getSearchedMovies(movies, searchQuery),
    [movies, searchQuery]
  );

  return { search, searchedMovies };
};
