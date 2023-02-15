import type {Suspect} from "./suspect";


export type Painting = {
    step: number;
    name: string;
    date: string;
    author: string;
    image: string;
    introDialog: string;
    statueDialog: string;
    suspects: Suspect[]
}