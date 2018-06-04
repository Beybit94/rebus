import { Level } from "./Level";

export class Rebus
{
    constructor(
        public id: number,
        public img: string,
        public answer: string,
        public levelId: number,
        public level:Level) { }
}