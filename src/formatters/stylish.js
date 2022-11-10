import _ from 'lodash';

const replacer = ' ';
const spacesCount = 2;
const stringify = (data, indent, handlerFunction, depth) => {
  const [key, val] = data;
  switch (val.difference) {
    case 'changed':
      return `${indent}- ${key}: ${handlerFunction(val.value1, depth + 2)
      }\n${indent}+ ${key}: ${handlerFunction(val.value2, depth + 2)}`;
    case 'added':
      return `${indent}+ ${key}: ${handlerFunction(val.value, depth + 2)}`;
    case 'deleted':
      return `${indent}- ${key}: ${handlerFunction(val.value, depth + 2)}`;
    default:
      return `${indent}  ${key}: ${handlerFunction(val.value || val, depth + 2)}`;
  }
};

export default (value) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) return `${currentValue}`;

    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);

    const lines = Object
      .entries(currentValue)
      .map((data) => stringify(data, currentIndent, iter, depth));
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(value, 1);
};
