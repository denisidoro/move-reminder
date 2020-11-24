import { parse } from './one-parser';

const text = `line 1
line 2
   line 3
      line 4

line 5


line 6
   line 7
   line 8`

function walkFn(name, children) {
    return children.length > 0 ? [name, children] : [name]
}

it('converts a text', () => {
    expect(parse(text).walk(walkFn)).toEqual([
        ["line 1"],
        ["line 2", [["line 3"], ["line 4"]]],
        ["line 5"],
        ["line 6", [["line 7"], ["line 8"]]]
    ])
});