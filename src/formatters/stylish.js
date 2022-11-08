import _ from 'lodash';

export default (diff) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) return `${currentValue}`;
    const replacer = ' ';
    const spacesCount = 2;
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const lines = Object.entries(currentValue).map(([key, val]) => {
      if (val.difference === 'nested') return `${currentIndent}  ${key}: ${iter(val.value, depth + 2)}`;
      if (val.difference === 'changed') return `${currentIndent}- ${key}: ${iter(val.value1, depth + 2)}\n${currentIndent}+ ${key}: ${iter(val.value2, depth + 2)}`;
      if (val.difference === 'added') return `${currentIndent}+ ${key}: ${iter(val.value, depth + 2)}`;
      if (val.difference === 'deleted') return `${currentIndent}- ${key}: ${iter(val.value, depth + 2)}`;
      if (val.difference === 'unchanged') return `${currentIndent}  ${key}: ${val.value}`;
      return (_.isObject(val)) ? `${currentIndent}  ${key}: ${iter(val, depth + 2)}` : `${currentIndent}  ${key}: ${val}`;
    });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(diff, 1);
};
