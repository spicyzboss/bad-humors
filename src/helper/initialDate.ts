import type { Humor } from "types/main";

export function initialDate(numberOfDays: number): Humor[] {
  let arrayOfDays: Array<Humor | null> = [];
  for (let i = 1; i <= numberOfDays; i++) {
    arrayOfDays.push(null);
  }

  return arrayOfDays;
}