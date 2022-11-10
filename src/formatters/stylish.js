import _ from 'lodash';

const replacer = ' ';
const spacesCount = 2;

export default (diff) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) return `${currentValue}`;
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);

    const lines = Object.entries(currentValue).map(([key, val]) => {
      switch (val.difference) {
        case 'changed':
          return `${currentIndent}- ${key}: ${iter(val.value1, depth + 2)}\n${currentIndent}+ ${key}: ${iter(val.value2, depth + 2)}`;
        case 'added':
          return `${currentIndent}+ ${key}: ${iter(val.value, depth + 2)}`;
        case 'deleted':
          return `${currentIndent}- ${key}: ${iter(val.value, depth + 2)}`;
        default:
          return `${currentIndent}  ${key}: ${iter(val.value || val, depth + 2)}`;
      }
    });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(diff, 1);
};
