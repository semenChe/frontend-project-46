import _ from 'lodash';

const replacer = ' ';
const spacesCount = 2;

export default (value) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) return `${currentValue}`;

    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);

    const stringify = (data) => {
      const [key, val] = data;
      switch (val.difference) {
        case 'changed':
          return `${currentIndent}- ${key}: ${iter(val.value1, depth + 2)
          }\n${currentIndent}+ ${key}: ${iter(val.value2, depth + 2)}`;
        case 'added':
          return `${currentIndent}+ ${key}: ${iter(val.value, depth + 2)}`;
        case 'deleted':
          return `${currentIndent}- ${key}: ${iter(val.value, depth + 2)}`;
        default:
          return `${currentIndent}  ${key}: ${iter(val.value || val, depth + 2)}`;
      }
    };

    const lines = Object.entries(currentValue).map((data) => stringify(data));
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(value, 1);
};
