import { useMemo, useState } from 'react';
import { MAX_SHORT_DURATION } from "../../utils/constants";

export function useShortsMoviesFilter(
  movies,
  getDefaultShortsOnly,
  onShortsOnlyChange
) {
  const [shortsOnly, setShortsOnly] = useState(getDefaultShortsOnly);

  const handleShortsOnlyChange = (value) => {
    setShortsOnly(value);
    onShortsOnlyChange?.(value);
  };

  const filteredMovies = useMemo(() => {
    if (shortsOnly) return movies?.filter(({ duration }) => duration <= MAX_SHORT_DURATION);
    return movies;
  }, [movies, shortsOnly]);

  return {
    shortsOnly,
    setShortsOnly: handleShortsOnlyChange,
    filteredMovies,
  };
}
