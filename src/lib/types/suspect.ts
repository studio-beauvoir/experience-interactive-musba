export type SuspectId = string;
export type SuspectType = 'witness' | 'innocent' | 'accomplice';
export type Suspect = {
    id: SuspectId;
    name: string;
    type: SuspectType;
    text: string;
    comicTitle: string;
    button: { rightSide: boolean, x: number, y: number };
    zoom: { x: number, y: number };
    emotion: { x: number, y: number, width: number };
}

export type Suspects = {
    [step: number]: Suspect
}

export type SelectedSuspects = Suspects

export type SelectedSuspectsIds = {
    [step: number]: SuspectId
}