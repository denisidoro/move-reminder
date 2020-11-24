import { stringToMap } from './bulk-parser';

const text1 = `line 1
line 2
    line 3
line 4`

const text2 = `line 5`

it('converts to a map', () => {
    expect(stringToMap(`> Foo/bar/baz
${text1}

> Lorem/ipsum
${text2}`)).toEqual({
        "Foo/bar/baz": `${text1}
`,
        "Lorem/ipsum": text2
    })
});