# The path of the JavaScript source code files
JS_SRC = $(wildcard dev/html/js/)
# JSHint
JSHINT = jshint --config .jshintrc $(JS_SRC)
# JSCS
JSCS = jscs $(JS_SRC) --preset=jquery
# JSDoc
JSDOC = jsdoc --verbose -r -d "./doc/js" $(JS_SRC) "./doc/overview.md"

ifeq ($(SERVER),)
	SERVER = default
endif

clean:
	@echo ""
	@echo "## CLEAN ##"
	rm -rf ./build
	rm -rf ./dist

build_paths:
	@echo ""
	@echo "## BUILD PATHS ##"
	mkdir "./build"
	mkdir "./build/dev"
	mkdir "./build/dev/html"
	mkdir "./build/dev/html/css"
	mkdir "./build/dev/html/js"
	mkdir "./build/dev/html/libs"
	mkdir "./build/dev/html/templates"
	mkdir "./build/dev/config"
	mkdir "./build/dev/src"
	mkdir "./dist"

jsdoc:
	$(JSDOC)

build: clean build_paths
	echo $(JS_SRC)
	$(JSHINT)
	$(JSCS)

	cp "./dev/html/index.html" "./build/dev/html"
	cp -r "./dev/html/css" "./build/dev/html/"
	cp -r "./dev/html/js" "./build/dev/html/"
	cp -r "./dev/html/libs" "./build/dev/html/"
	cp -r "./dev/html/templates" "./build/dev/html/"
	cp "./dev/html/config/$(SERVER)/app/config.json" "./build/dev/html/config.json"