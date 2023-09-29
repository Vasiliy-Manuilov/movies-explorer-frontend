import {useMemo, useState} from "react";

export function useMoviesPagination(movies, { limit, paginationLimit }) {
    const [visibleCount, setVisibleCount] = useState(limit)

    const paginatedMovies = useMemo(
        () => movies?.slice(0, visibleCount),
        [movies, visibleCount]
    )

    const loadMore = () => {
        setVisibleCount(count => count + paginationLimit)
    }

    const hasMore = movies?.length > paginatedMovies?.length

    return { paginatedMovies, loadMore, hasMore }
}
