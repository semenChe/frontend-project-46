import _ from 'lodash';

const replacer = ' ';
const spacesCount = 2;

export default (diff) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) return `${currentValue}`;
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const stringFormation = (operator, key, val) => `${currentIndent}${operator} ${key}: ${iter(val, depth + 2)}`;
    const lines = Object.entries(currentValue).map(([key, val]) => {
      switch (val.difference) {
        case 'changed':
          return `${stringFormation('-', key, val.value1)}\n${stringFormation('+', key, val.value2)}`;
        case 'added':
          return stringFormation('+', key, val.value);
        case 'deleted':
          return stringFormation('-', key, val.value);
        default:
          return stringFormation(' ', key, val.value || val, depth);
      }
    });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(diff, 1);
};
