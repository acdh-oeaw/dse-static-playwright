import { resolve } from "node:path";
import { glob } from "glob";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		minify: "terser",
		lib: {
			// https://gist.github.com/jasenmichael/58dd3a4f8e7ec1d003e88907bba392d7
			entry: glob.sync(resolve(__dirname, "dse-static-utils/*.ts")),
			formats: ["es"],
		},
		outDir: resolve(__dirname, "html/js/dse-static-utils"),
		rollupOptions: {
			output: {
				entryFileNames: "[name].js",
			},
		},
	},
});