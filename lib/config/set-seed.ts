import randomSeed from "random-seed";
import { setRandomFunction } from "./random-function";

const { create } = randomSeed;

// TODO: Allow seed strings
export const setSeed = (seed: number) => setRandomFunction(create(seed).random);
