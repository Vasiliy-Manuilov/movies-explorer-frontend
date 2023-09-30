import { LARGE_SCREEN_SIZE, MEDIUM_SCREEN_SIZE, SMALL_SCREEN_SIZE } from "./ScreenSize";

export const limitsByScreenSize = {
    [LARGE_SCREEN_SIZE]: { limit: 16, paginationLimit: 4 },
    [MEDIUM_SCREEN_SIZE]: { limit: 8, paginationLimit: 2 },
    [SMALL_SCREEN_SIZE]: { limit: 5, paginationLimit: 1 },
};
