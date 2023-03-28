import createModule from "./wasmtest.mjs";
createModule().then((t) => {
  const out = document.getElementById("output");
  out.innerText += `The answer is ${t._hello(0)}`;
});
