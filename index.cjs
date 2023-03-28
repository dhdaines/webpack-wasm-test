const createModule = require("./wasmtest.cjs");
createModule().then((t) => {
  const out = document.getElementById("output");
  out.innerText += `The answer is ${t._hello(0)}`;
});
