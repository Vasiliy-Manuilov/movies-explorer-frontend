import {useMemo, useState} from "react";

export function useShortsMoviesFilter(movies) {
    const [shortsOnly, setShortsOnly] = useState(false)

    const filteredMovies = useMemo(
        () => {
            if (shortsOnly)
                return movies.filter(({duration}) => duration <= 40)
            return movies
        },
        [movies, shortsOnly]
    )

    return {
        shortsOnly,
        setShortsOnly,
        filteredMovies,
    }
}
