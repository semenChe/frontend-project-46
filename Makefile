install-deps:
	npm ci
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .

link:
	npm link

test:
	npx jest

test-watch:
	npx jest --watch

test-coverage:
	npx jest --bail --coverage --coverageProvider=v8
