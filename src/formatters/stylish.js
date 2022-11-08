import _ from 'lodash';

export default (diff) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }
    const spacesCount = 2;
    const currentIndent = ' '.repeat(depth * spacesCount);
    const lines = Object.entries(currentValue).map(([key, val]) => {
      if (val.difference === 'nested') {
        return `${currentIndent}  ${key}: ${iter(val.value, depth + 2)}`;
      }
      if (val.difference === 'changed') {
        return `${currentIndent}- ${key}: ${iter(val.value1, depth + 2)}\n${currentIndent}+ ${key}: ${iter(val.value2, depth + 2)}`;
      }
      if (val.difference === 'added') {
        return `${currentIndent}+ ${key}: ${iter(val.value, depth + 2)}`;
      }
      if (val.difference === 'deleted') {
        return `${currentIndent}- ${key}: ${iter(val.value, depth + 2)}`;
      }
      if (val.difference === 'unchanged') {
        return `${currentIndent}  ${key}: ${val.value}`;
      }
      if (_.isObject(val)) {
        return `${currentIndent}  ${key}: ${iter(val, depth + 2)}`;
      }
      return `${currentIndent}  ${key}: ${val}`;
    });
    return ['{', ...lines, `${' '.repeat(depth * spacesCount - spacesCount)}}`].join('\n');
  };

  return iter(diff, 1);
};
