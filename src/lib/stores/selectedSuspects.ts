import {writable} from 'svelte/store';
import type {SelectedSuspects, Suspect} from "$lib/types/suspect";

const LS_KEY = 'tws-selected-suspects-v2';

function getBaseValue() {
    return {};
}

function saveToLocalStorage(selectedSuspects: SelectedSuspects): void {
    localStorage.setItem(LS_KEY, JSON.stringify(selectedSuspects));
}

function loadFromLocalStorage(): SelectedSuspects {
    const item = localStorage.getItem(LS_KEY);

    if (!item) {
        return getBaseValue();
    }

    return JSON.parse(item);
}

function createSelectedSuspects() {
    const {subscribe, set, update} = writable(getBaseValue());

    return {
        subscribe,
        set,
        accuse: (step: number, accusedSuspect: Suspect) => update(function (selectedSuspects: SelectedSuspects) {
            selectedSuspects[step] = accusedSuspect
            saveToLocalStorage(selectedSuspects);
            return selectedSuspects;
        }),
        reset: () => {
            set(getBaseValue())
            saveToLocalStorage(getBaseValue())
        },
        load: () => set(loadFromLocalStorage()),
    };
}

export const selectedSuspects = createSelectedSuspects();