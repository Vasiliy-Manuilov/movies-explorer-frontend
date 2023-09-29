import {useEffect, useState} from "react";

export const LARGE_SCREEN_SIZE = "large";
export const MEDIUM_SCREEN_SIZE = "medium";
export const SMALL_SCREEN_SIZE = "small";

function getScreenSizeByWidth(width) {
    if (width > 865) {
        return LARGE_SCREEN_SIZE;
    } else if (width < 865 && width > 600) {
        return MEDIUM_SCREEN_SIZE;
    } else if (width < 600) {
        return SMALL_SCREEN_SIZE;
    }
}

export function useScreenSize() {

    const [width, setWidth] = useState(document.documentElement.clientWidth)

    useEffect(() => {
        const handleResizeWindow = () => {
            setTimeout(() => {
                setWidth(document.documentElement.clientWidth);
            }, 2000);
        }

        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    return getScreenSizeByWidth(width)
}
