import { randomChance } from "../chance/chance";

export const randomChanceOfNegative = (value: number) =>
  value * (randomChance() ? 1 : -1);
