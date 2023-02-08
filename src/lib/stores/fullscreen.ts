import {writable} from 'svelte/store';

export const isFullscreen = writable(false);

export const toggleFullScreen = async () => {
    if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        isFullscreen.set(true);
    } else {
        if (document.exitFullscreen) {
            await document.exitFullscreen();
            isFullscreen.set(false);
        }
    }
}