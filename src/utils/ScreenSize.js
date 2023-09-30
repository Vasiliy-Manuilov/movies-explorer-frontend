export const LARGE_SCREEN_SIZE = "large";
export const MEDIUM_SCREEN_SIZE = "medium";
export const SMALL_SCREEN_SIZE = "small";

export function getScreenSizeByWidth(width) {
    if (width > 865) {
        return LARGE_SCREEN_SIZE;
    } else if (width < 865 && width > 600) {
        return MEDIUM_SCREEN_SIZE;
    } else if (width < 600) {
        return SMALL_SCREEN_SIZE;
    }
}
