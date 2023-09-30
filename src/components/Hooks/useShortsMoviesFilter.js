import {useMemo, useState} from "react";

export function useShortsMoviesFilter(movies, getDefaultShortsOnly, onShortsOnlyChange) {
    const [shortsOnly, setShortsOnly] = useState(getDefaultShortsOnly)

    const handleShortsOnlyChange = (value) => {
        setShortsOnly(value)
        onShortsOnlyChange(value)
    }

    const filteredMovies = useMemo(
        () => {
            if (shortsOnly)
                return movies?.filter(({duration}) => duration <= 40)
            return movies
        },
        [movies, shortsOnly]
    )

    return {
        shortsOnly,
        setShortsOnly: handleShortsOnlyChange,
        filteredMovies,
    }
}
