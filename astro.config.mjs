import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  srcDir: "./docs",
  outDir: "./docs-dist",
  output: "static",
});
