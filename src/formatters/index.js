import plain from './plain.js';
import stylish from './stylish.js';
import jsonFormat from './jsonFormat.js';

export default (diff, formatName) => {
    if (formatName === 'plain') {
        return plain(diff);
    }
    if (formatName === 'json') {
        return jsonFormat(diff);
    }
    if (formatName === 'stylish') {
        return stylish(diff);
    }
    return `output format ${formatName} not found`;
};