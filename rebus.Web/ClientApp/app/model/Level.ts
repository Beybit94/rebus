import { Rebus } from "./Rebus";

export class Level
{
    constructor(
        public id: number,
        public name: string,
        public isPro: boolean,
        public rebuses: Rebus[]) { }
}