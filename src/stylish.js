import _ from 'lodash';

export default (value, replacer = ' ', spacesCount = 2) => {
    const iter = (currentValue, depth) => {

        const indentSize = depth * spacesCount;
        const currentIndent = replacer.repeat(indentSize);
        const bracketIndent = replacer.repeat(indentSize - spacesCount);

        const lines = Object
            .entries(currentValue).sort()
            .map(([key, val]) => {
                if (val.difference === 'changed with children') {
                    return `${currentIndent}  ${key}: ${iter(val.value, depth + 2)}`;
                }
                else if (val.difference === 'changed' && !_.isObject(val.value1) && !_.isObject(val.value2)) {
                    return `${currentIndent}- ${key}: ${val.value1}\n${currentIndent}+ ${key}: ${val.value2}`;
                }
                else if (val.difference === 'changed' && !_.isObject(val.value1) && _.isObject(val.value2)) {
                    return `${currentIndent}- ${key}: ${val.value1}\n${currentIndent}+ ${key}: ${iter(val.value2, depth + 2)}`;
                }
                else if (val.difference === 'changed' && _.isObject(val.value1) && !_.isObject(val.value2)) {
                    return `${currentIndent}- ${key}: ${iter(val.value1, depth + 2)}\n${currentIndent}+ ${key}: ${val.value2}`;
                }
                else if (val.difference === 'added' && !_.isObject(val.value)) {
                    return `${currentIndent}+ ${key}: ${val.value}`;
                }
                else if (val.difference === 'added' && _.isObject(val.value)) {
                    return `${currentIndent}+ ${key}: ${iter(val.value, depth + 2)}`;
                }
                else if (val.difference === 'deleted' && !_.isObject(val.value)) {
                    return `${currentIndent}- ${key}: ${val.value}`;
                }
                else if (val.difference === 'deleted' && _.isObject(val.value)) {
                    return `${currentIndent}- ${key}: ${iter(val.value, depth + 2)}`;
                }
                else if (val.difference === 'unchanged') {
                    return `${currentIndent}  ${key}: ${val.value}`;
                }
                else if (_.isObject(val)) {
                    return `${currentIndent}  ${key}: ${iter(val, depth + 2)}`;
                }
                return `${currentIndent}  ${key}: ${val}`;
            });
        return [
            '{',
            ...lines,
            `${bracketIndent}}`,
        ].join('\n');
    };

    return iter(value, 1);
};