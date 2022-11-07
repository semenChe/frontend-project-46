install: install-deps

install-deps:
	npm ci

test:
	npx jest

test-coverage:
	npx jest --bail --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run

.PHONY: test
