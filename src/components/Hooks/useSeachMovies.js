import { useMemo, useState } from 'react';
import { getSearchedMovies } from '../../utils/searchMovies';
import { MAX_SHORT_DURATION } from '../../utils/constants';

export function useSearchMovies(movies, initialSearchParams, onSearch) {
  const [searchParams, setSearchParams] = useState(initialSearchParams);

  const searchedMovies = useMemo(() => {
    if (!searchParams || !movies) {
      return null;
    }
    const filteredBySearch = getSearchedMovies(movies, searchParams.query);
    if (searchParams.shortsOnly) {
      return filteredBySearch?.filter(
        ({ duration }) => duration <= MAX_SHORT_DURATION
      );
    }
    return filteredBySearch;
  }, [movies, searchParams]);

  const search = (newSearchParams) => {
    setSearchParams(newSearchParams);
    onSearch?.(newSearchParams);
  };

  return {
    searchedMovies,
    search,
  };
}
