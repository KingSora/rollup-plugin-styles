import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import autoExternal from "rollup-plugin-auto-external";
import ts from "@wessberg/rollup-plugin-ts";

import pkg from "./package.json";

export default {
  external: ["postcss"],
  input: "src/index.ts",
  output: [
    { format: "cjs", file: pkg.main },
    { format: "esm", file: pkg.module },
  ],
  plugins: [
    json(),
    replace({ "process.env.STYLES_TEST": false }),
    resolve({
      preferBuiltins: true,
      extensions: [".ts", ".mjs", ".js", ".json"],
    }),
    commonjs(),
    autoExternal(),
    ts({ transpiler: "babel" }),
  ],
};
