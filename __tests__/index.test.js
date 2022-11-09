import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const extensions = [
  ['json', 'json', undefined, 'result-stylish.txt'], ['yaml', 'yaml', undefined, 'result-stylish.txt'],
  ['yml', 'yml', undefined, 'result-stylish.txt'], ['json', 'yaml', undefined, 'result-stylish.txt'],

  ['json', 'json', 'stylish', 'result-stylish.txt'], ['yaml', 'yaml', 'stylish', 'result-stylish.txt'],
  ['yml', 'yml', 'stylish', 'result-stylish.txt'], ['json', 'yaml', 'stylish', 'result-stylish.txt'],

  ['json', 'json', 'plain', 'result-plain.txt'], ['yaml', 'yaml', 'plain', 'result-plain.txt'],
  ['yml', 'yml', 'plain', 'result-plain.txt'], ['json', 'yaml', 'plain', 'result-plain.txt'],

  ['json', 'json', 'json', 'result-json.json'], ['yaml', 'yaml', 'json', 'result-json.json'],
  ['yml', 'yml', 'json', 'result-json.json'], ['json', 'yaml', 'json', 'result-json.json'],
];

test.each(extensions)('file extensions and format(%s, %s, %s)', (file1Extension, file2Extension, format, resultFile) => {
  const fileAfter = getFixturePath(`file1.${file1Extension}`);
  const fileBefore = getFixturePath(`file2.${file2Extension}`);
  const result = fs.readFileSync(getFixturePath(resultFile), 'utf8');

  expect(genDiff(fileAfter, fileBefore, format)).toEqual(result);
});
