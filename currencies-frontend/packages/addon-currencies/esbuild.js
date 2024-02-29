const esbuild = require("esbuild");
const fs = require("node:fs");
const argv = process.argv.slice(2);

const generateContent = async (path, exportPathPrefix, encoding = "utf-8") => {
  // add `/` to the end of exportPathPrefix
  exportPathPrefix = exportPathPrefix.endsWith('/') ? exportPathPrefix : exportPathPrefix.concat('/');

  return (await fs.promises.readFile(path, encoding))
    .replaceAll(/export (.*) from ".\//g, `export $1 from "${exportPathPrefix}`);
};

/**
 * As our output file locates in `dist/index.esm.js` we need to add relative prefix (such as `../src`)
 * to export paths when run esbuild in `bundle = false` mode.
 *
 * I.e. `export * from "./example/increment";` -> `export * from "../src/example/increment";`
 */
const replaceExportPathPlugin = (exportPathPrefix = `../src`) => ({
  name: 'exportPathReplace',
  setup(build) {

    build.onLoad({filter: /.*/}, async (args) => {
      const contents = await generateContent(args.path, exportPathPrefix);

      if (build.initialOptions.logLevel === "debug") {
        console.debug("replaceExportPathPlugin - content generated:");
        console.debug(contents);
      }

      return {
        contents,
        loader: args.loader,
      };
    })
  },
});

(async function watch(plugins = []) {
  const ctx = await esbuild.context({
    logLevel: "debug",
    entryPoints: ["src/index.ts"],
    bundle: false,
    outfile: "dist/index.esm.js",
    plugins,
  });

  if (argv.includes("--ci=true")) {
    console.log("run dev on CI - rebuild, no watch");
    await ctx.rebuild();
    return ctx.dispose();
  } else {
    await ctx.watch();
  }

})([replaceExportPathPlugin()] /* pass plugins from outside to use in build */);