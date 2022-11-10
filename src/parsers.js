import yaml from 'js-yaml';

export default (data, typeFile) => {
  switch (typeFile) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`unknown file extension ${typeFile}`);
  }
};
