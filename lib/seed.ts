import randomSeed from "random-seed";
import { generateHelpers } from "./generate-helpers";

const { create } = randomSeed;

// TODO: Allow seed strings
export const seed = (seed: number) => generateHelpers(create(seed));
