import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs", "iife"],
  external: ["react", "react-dom"],
  dts: true,
  clean: true,
  minify: false,
  sourcemap: true,
  treeshake: true,
  splitting: true,
});
