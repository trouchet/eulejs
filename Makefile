.PHONY: help clean test coverage install
.DEFAULT_GOAL := help

define BROWSER_PYSCRIPT
import os, webbrowser, sys

from urllib.request import pathname2url

rel_current_path = sys.argv[1]
abs_current_path = os.path.abspath(rel_current_path)
uri = "file://" + pathname2url(abs_current_path)

webbrowser.open(uri)
endef

export BROWSER_PYSCRIPT

define PRINT_HELP_PYSCRIPT
import re, sys

regex_pattern = r'^([a-zA-Z_-]+):.*?## (.*)$$'

for line in sys.stdin:
	match = re.match(regex_pattern, line)
	if match:
		target, help = match.groups()
		print("%-20s %s" % (target, help))
endef

export PRINT_HELP_PYSCRIPT

BROWSER := python -c "$$BROWSER_PYSCRIPT"
PACKAGE_VERSION := poetry version -s

PACKAGE_NAME = "eule"
COVERAGE_IGNORE_PATHS = "eule/examples"

help:
	@python -c "$$PRINT_HELP_PYSCRIPT" < $(MAKEFILE_LIST)

clean: clean-test ## remove all test coverage

clean-test: ## remove test and coverage artifacts
	rm -fr coverage/

test: ## run tests with jest
	npm run test:run

test-watch: ## run tests on watchdog mode
	npm run test:watch

lint: clean ## perform inplace lint fixes
	npm run format && npm run format:check 

install: clean ## install the packages
	npm install

publish: clean ## build source and publish package
	npm run release
