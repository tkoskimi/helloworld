# The path of the JavaScript source code files
JS_SRC = $(wildcard dev/html/js/)
# The path of the JavaScript unit test files
JS_SRC_UNIT_TEST = $(wildcard test/unit/html/js/)
# The path of the JavaScript functional test files
JS_SRC_FUNC_TEST = $(wildcard test/functional/html/js/)
# JSHint
JSHINT = jshint --config .jshintrc
# JSCS
JSCS = jscs --preset=jquery
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

test: clean build_paths
	@echo ""
	@echo "## TEST ##"
	$(JSHINT) $(JS_SRC_UNIT_TEST)
	$(JSCS) $(JS_SRC_UNIT_TEST)

build: clean build_paths
	echo $(JS_SRC)
	$(JSHINT) $(JS_SRC)
	$(JSCS) $(JS_SRC)

	cp "./dev/html/index.html" "./build/dev/html"
	cp -r "./dev/html/css" "./build/dev/html/"
	cp -r "./dev/html/js" "./build/dev/html/"
	cp -r "./dev/html/libs" "./build/dev/html/"
	cp -r "./dev/html/templates" "./build/dev/html/"
	cp "./dev/html/config/$(SERVER)/app/config.json" "./build/dev/html/config.json"