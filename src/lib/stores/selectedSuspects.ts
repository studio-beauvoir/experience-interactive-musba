import {writable} from 'svelte/store';

const LS_KEY = 'tws-selected-suspects';

function saveToLocalStorage(suspects) {
    localStorage.setItem(LS_KEY, JSON.stringify(suspects));
}

function loadFromLocalStorage() {
    const item = localStorage.getItem(LS_KEY);

    if (!item) {
        return [];
    }

    return JSON.parse(item);
}

function createSelectedSuspects() {
    const {subscribe, set, update} = writable([]);

    return {
        subscribe,
        accuse: accusedSuspect => update(function (selectedSuspectsList) {
            selectedSuspectsList.push(accusedSuspect)
            saveToLocalStorage(selectedSuspectsList);
            return selectedSuspectsList;
        }),
        reset: () => set([]),
        load: () => set(loadFromLocalStorage()),
    };
}

export const selectedSuspects = createSelectedSuspects();