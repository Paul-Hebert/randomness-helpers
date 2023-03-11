import { random } from "../random";

export const randomChance = (likelihood = 0.5) => random(0, 1) < likelihood;
