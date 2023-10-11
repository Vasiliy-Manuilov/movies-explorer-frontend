import { SCREEN_SIZE_1280, SCREEN_SIZE_748 } from './constants';

export const LARGE_SCREEN_SIZE = 'large';
export const MEDIUM_SCREEN_SIZE = 'medium';
export const SMALL_SCREEN_SIZE = 'small';

export function getScreenSizeByWidth(width) {
  if (width >= SCREEN_SIZE_1280) {
    return LARGE_SCREEN_SIZE;
  } else if (width >= SCREEN_SIZE_748) {
    return MEDIUM_SCREEN_SIZE;
  } else {
    return SMALL_SCREEN_SIZE;
  }
}
