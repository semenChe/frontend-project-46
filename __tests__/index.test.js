import genDiff from '../src/index.js';

test('genDiff', () => {
    const patch1 = '/Users/semencernysev/Public/frontend-project-46/__fixtures__/file1.json';
    const patch2 = '/Users/semencernysev/Public/frontend-project-46/__fixtures__/file2.json';
    const result1 = '{\n- follow: false\n  host: hexlet.io\n- proxy: 123.234.53.22\n- timeout: 50\n+ timeout: 20\n+ verbose: true\n}';
    expect(genDiff(patch1, patch2)).toEqual(result1);
});