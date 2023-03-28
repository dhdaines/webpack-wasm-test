Webpack WASM tests
------------------

This repository contains a minimal example of using
Emscripten-generated WebAssembly modules with webpack, in both ES6 and
CommonJS module format.

It may be useful if you are puzzling over why in the name of God's
Green Earth (or Hell's Half-Acre, if you prefer) webpack is failing to
bundle your code.

To build everything (assuming you have installed
[emsdk](https://emscripten.org/docs/getting_started/downloads.html#installation-instructions-using-the-emsdk-recommended)):

    make

Now you can run examples in Node.js:

    node main.mjs
    node main.cjs

Or run in the browser as an ES6 module:

    npx webpack serve -c webpack.config.es6.js
    xdg-open http://localhost:8080/

Or as CommonJS:

    npx webpack serve -c webpack.config.cjs.js
    xdg-open http://localhost:8080/

And you will also find the bundles in `dist`.
