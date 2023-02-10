import {writable} from 'svelte/store';

const LS_KEY = 'tws-parcours-done-v1';

function saveToLocalStorage(parcours) {
    localStorage.setItem(LS_KEY, JSON.stringify(parcours));
}

function loadFromLocalStorage() {
    const parcours = localStorage.getItem(LS_KEY);

    if (!parcours) {
        return [];
    }

    return JSON.parse(parcours);
}

function createParcoursDone() {
    const defaultData: any[] = [];

    const {subscribe, set, update} = writable(defaultData);

    return {
        subscribe,
        add: selectedSuspects => update(function (parcoursDoneList) {
            parcoursDoneList.push(selectedSuspects.map(suspect => suspect.id).join('_'))
            saveToLocalStorage(parcoursDoneList);
            return parcoursDoneList;
        }),
        reset: () => {
            set(defaultData)
            saveToLocalStorage(defaultData)
        },
        load: () => set(loadFromLocalStorage()),
    };
}

export const parcoursDone = createParcoursDone();