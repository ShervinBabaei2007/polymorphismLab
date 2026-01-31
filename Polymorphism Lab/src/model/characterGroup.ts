import { ISortable } from "../interface/ISortable";

export class CharacterGroup implements ISortable {
  data: string;

  constructor(data: string) {
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftPos: number, rightPos: number): boolean {
    return this.data[leftPos]!.toLowerCase()! > this.data[rightPos]!.toLowerCase()!;
  }

  swap(leftPos: number, rightPos: number): void {
    // split string since its immutable (can't do anything...)
    const characters = this.data.split("");
    const temp = characters[leftPos];
    characters[leftPos] = characters[rightPos]!;
    characters[rightPos] = temp!;
    this.data = characters.join("");
  }
}
