import createModule from "./wasmtest.mjs";
createModule().then((t) => {
  console.log(`The answer is ${t._hello(0)}`);
});
