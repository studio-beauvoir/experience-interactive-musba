import {writable} from 'svelte/store';

function createFullscreen() {
    const {subscribe, set, update} = writable(false);

    return {
        subscribe,
        toggle: async () => {
            if (!document.fullscreenElement) {
                if (document.documentElement.requestFullscreen) {
                    await document.documentElement.requestFullscreen();
                } else if (document.documentElement.webkitRequestFullScreen) {
                    await document.documentElement.webkitRequestFullScreen()
                } else if (document.documentElement.mozRequestFullScreen) {
                    await document.documentElement.mozRequestFullScreen()
                }

                set(true);
            } else {
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    await document.webkitCancelFullScreen()
                } else if (document.mozCancelFullScreen) {
                    await document.mozCancelFullScreen()
                } else if (document.cancelFullScreen) {
                    await document.cancelFullScreen()
                }

                set(false);
            }
        }
    };
}

export const fullscreen = createFullscreen();