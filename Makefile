ALL = wasmtest.cjs wasmtest.mjs dist-es6/bundle.js dist-cjs/bundle.js

all: $(ALL)

clean:
	$(RM) $(ALL) wasmtest.wasm
	$(RM) -r dist*

.PHONY: all clean

wasmtest.cjs: main.c
	emcc -o wasmtest.cjs -g -Oz -sMALLOC=emmalloc -sMODULARIZE=1 -sEXPORTED_FUNCTIONS=_hello main.c

wasmtest.mjs: main.c
	emcc -o wasmtest.mjs -g -Oz -sMALLOC=emmalloc -sMODULARIZE=1 -sEXPORT_ES6=1 -sEXPORTED_FUNCTIONS=_hello main.c

dist-es6/bundle.js: wasmtest.mjs
	npx webpack -c webpack.config.es6.js

dist-cjs/bundle.js: wasmtest.cjs
	npx webpack -c webpack.config.cjs.js

