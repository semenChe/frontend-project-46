import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const extensions = ['json', 'yaml', 'yml'];
const result1 = fs.readFileSync(getFixturePath('result-stylish.txt'), 'utf8');
const result2 = fs.readFileSync(getFixturePath('result-plain.txt'), 'utf8');
const result3 = fs.readFileSync(getFixturePath('result-json.json'), 'utf8');

test.each(extensions)('.add(%s)', (extension) => {
  const fileAfter = getFixturePath(`file1.${extension}`);
  const fileBefore = getFixturePath(`file2.${extension}`);

  expect(genDiff(fileAfter, fileBefore)).toEqual(result1);
  expect(genDiff(fileAfter, fileBefore, 'plain')).toEqual(result2);
  expect(genDiff(fileAfter, fileBefore, 'json')).toEqual(result3);
});
