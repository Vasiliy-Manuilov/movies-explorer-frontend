import {useEffect, useState} from "react";
import { getScreenSizeByWidth } from "../../utils/ScreenSize";

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
