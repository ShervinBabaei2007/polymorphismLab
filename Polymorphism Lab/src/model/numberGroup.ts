import { ISortable } from "../interface/ISortable";

export class NumberGroup implements ISortable {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  get length(): number {
    // logic:
    return this.data.length;
  }

  swap(leftPos: number, rightPos: number): void {
    // logic:
    const temp = this.data[leftPos];
    this.data[leftPos] = this.data[rightPos]!;
    this.data[rightPos] = temp!;
  }

  compare(leftPos: number, rightPos: number): boolean {
    // logic:
    return this.data[leftPos]! > this.data[rightPos]!;
  }
}
