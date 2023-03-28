ALL = wasmtest.cjs wasmtest.mjs dist/bundle.js

all: $(ALL)

clean:
	$(RM) $(ALL) wasmtest.wasm
	$(RM) -r dist

.PHONY: all clean

wasmtest.cjs: main.c
	emcc -o wasmtest.cjs -g -Oz -sMALLOC=emmalloc -sMODULARIZE=1 -sEXPORTED_FUNCTIONS=_hello main.c

wasmtest.mjs: main.c
	emcc -o wasmtest.mjs -g -Oz -sMALLOC=emmalloc -sMODULARIZE=1 -sEXPORT_ES6=1 -sEXPORTED_FUNCTIONS=_hello main.c

dist/bundle.js: wasmtest.mjs
	npx webpack
