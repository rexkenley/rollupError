import cleaner from "rollup-plugin-cleaner";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import ts from "rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";

export default {
  input: ["src/index.ts"],
  output: {
    dir: "lib",
    format: "es",
    preserveModules: true,
    preserveModulesRoot: "src",
    sourcemap: true,
    validate: true
  },
  plugins: [
    cleaner({
      targets: ["lib"]
    }),
    external(),
    resolve(),
    ts({ browserslist: false, transpiler: "babel" }),
    terser(),
    visualizer({ filename: "stories/.lib.stats.html" })
  ],
  external: ["@fluentui/react", "date-fns", "lodash", "react", "react-dom"]
};
