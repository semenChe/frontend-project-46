import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return _.isString(value) ? `'${value}'` : value;
};

export default (diff) => {
  const iter = (currentDiff, patch = '') => Object
    .entries(currentDiff)
    .flatMap(([key, val]) => {
      if (val.difference === 'nested') {
        return iter(val.value, `${patch}${key}.`);
      }
      if (val.difference === 'added') {
        return `Property '${patch}${key}' was added with value: ${stringify(val.value)}`;
      }
      if (val.difference === 'deleted') {
        return `Property '${patch}${key}' was removed`;
      }
      return (val.difference === 'changed') ? `Property '${patch}${key}' was updated. From ${stringify(val.value1)} to ${stringify(val.value2)}` : [];
    }).join('\n');
  return iter(diff);
};
