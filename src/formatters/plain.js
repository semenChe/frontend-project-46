import _ from 'lodash';

const helper = (value) => {
    if (typeof value === 'string') {
        return `'${value}'`;
    }
    if (typeof value === 'boolean') {
        return value === true ? 'true' : 'false';
    }
    if (typeof value === 'number') {
        return `${value}`;
    }
    if (value === null) {
        return 'null';
    }
};

export default (diff) => {
    const iter = (currentDiff, patch = '') => {
        return Object
            .entries(currentDiff).sort()
            .flatMap(([key, val]) => {
                if (val.difference === 'changed with children') {
                    return iter(val.value, patch + `${key}.`);
                }
                else if (val.difference === 'added' && !_.isObject(val.value)) {
                    return `Property '${patch}${key}' was added with value: ${helper(val.value)}`;
                }
                else if (val.difference === 'added' && _.isObject(val.value)) {
                    return `Property '${patch}${key}' was added with value: [complex value]`;
                }
                else if (val.difference === 'deleted') {
                    return `Property '${patch}${key}' was removed`;
                }
                else if (val.difference === 'changed' && _.isObject(val.value1) && _.isObject(val.value2)) {
                    return `Property '${patch}${key}' was updated. From [complex value] to [complex value]`;
                }
                else if (val.difference === 'changed' && !_.isObject(val.value1) && _.isObject(val.value2)) {
                    return `Property '${patch}${key}' was updated. From ${helper(val.value1)} to [complex value]`;
                }
                else if (val.difference === 'changed' && _.isObject(val.value1) && !_.isObject(val.value2)) {
                    return `Property '${patch}${key}' was updated. From [complex value] to ${helper(val.value2)}`;
                }
                else if (val.difference === 'changed') {
                    return `Property '${patch}${key}' was updated. From ${helper(val.value1)} to ${helper(val.value2)}`;
                }
                return [];
            }).join('\n');
    };
    return iter(diff);
};