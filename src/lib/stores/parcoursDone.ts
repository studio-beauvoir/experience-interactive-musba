import {writable} from 'svelte/store';
import type {ParcoursDoneList} from "$lib/types/parcours";
import type {SelectedSuspects, SelectedSuspectsIds, Suspect} from "$lib/types/suspect";

const LS_KEY = 'tws-parcours-done-v1';

function getBaseValue(): ParcoursDoneList {
    return [];
}

function saveToLocalStorage(parcoursDoneList: ParcoursDoneList): void {
    localStorage.setItem(LS_KEY, JSON.stringify(parcoursDoneList));
}

function loadFromLocalStorage(): ParcoursDoneList {
    const item = localStorage.getItem(LS_KEY);

    if (!item) {
        return getBaseValue();
    }

    return JSON.parse(item);
}

function createParcoursDone() {
    const {subscribe, set, update} = writable(getBaseValue());

    return {
        subscribe,
        add: (selectedSuspects: SelectedSuspects) => update(function (parcoursDoneList: ParcoursDoneList) {
            const selectedSuspectsIds: SelectedSuspectsIds = {};

            Object.entries(selectedSuspects).forEach((value: [string, Suspect]) => {
                const [step, suspect] = value;
                selectedSuspectsIds[parseInt(step)] = suspect.id
            });

            parcoursDoneList.push(selectedSuspectsIds);

            saveToLocalStorage(parcoursDoneList);
            
            return parcoursDoneList;
        }),
        reset: () => {
            saveToLocalStorage(getBaseValue())
            set(loadFromLocalStorage())
        },
        load: () => set(loadFromLocalStorage()),
    };
}

export const parcoursDone = createParcoursDone();