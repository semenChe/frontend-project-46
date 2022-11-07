import path from 'path';
import { readFileSync } from 'fs';
import parse from './parsers.js';
import renderDiff from './formatters/index.js';
import buildTree from './buildTree.js';

export default (pathFile1, pathFile2, formatName = 'stylish') => {
  const getData = (pathFile) => readFileSync(pathFile, 'utf-8');

  const getFileExtension = (pathFile) => path.extname(pathFile).slice(1);

  const dataFile1 = parse(getData(pathFile1), getFileExtension(pathFile1));
  const dataFile2 = parse(getData(pathFile2), getFileExtension(pathFile2));

  const diff = buildTree(dataFile1, dataFile2);

  return renderDiff(diff, formatName);
};
