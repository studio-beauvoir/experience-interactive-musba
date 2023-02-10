import {writable} from 'svelte/store';

const LS_KEY = 'tws-selected-suspects-v1';

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
    const defaultData: any[] = [];

    const {subscribe, set, update} = writable(defaultData);

    return {
        subscribe,
        accuse: accusedSuspect => update(function (selectedSuspectsList) {
            selectedSuspectsList.push(accusedSuspect)
            saveToLocalStorage(selectedSuspectsList);
            return selectedSuspectsList;
        }),
        reset: () => {
            set(defaultData)
            saveToLocalStorage(defaultData)
        },
        load: () => set(loadFromLocalStorage()),
    };
}

export const selectedSuspects = createSelectedSuspects();