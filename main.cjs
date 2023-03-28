const createModule = require("./wasmtest.cjs");
createModule().then((t) => {
  console.log(`The answer is ${t._hello(0)}`);
});
