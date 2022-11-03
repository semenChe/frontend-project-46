import plain from './plain.js';
import stylish from './stylish.js';

export default (diff, formatName) => {
    if (formatName === 'plain') {
        return plain(diff);
    }
    return stylish(diff);
};