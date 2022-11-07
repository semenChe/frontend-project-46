install: install-deps

test:
	npx jest

test-coverage:
	npx jest --bail --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run

.PHONY: test
