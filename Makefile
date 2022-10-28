install:
    install-deps
	
run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --bail --coverage --coverageProvider=v8

test-watch:
    npx jest --watch

lint:
	npx eslint .

publish:
	npm publish

.PHONY:
    test
