# Move Reminder

A mind map ecosystem which uses indented plain text files.

![Demo](https://user-images.githubusercontent.com/3226564/99439797-6c5b8300-28f4-11eb-9f0f-46be1872bea7.png)

## Why?

[This blog post](https://denisidoro.github.io/posts/mind-maps/) discusses why this tool was built and how it can be useful.

### Demo

The tool is available [here](https://denisidoro.github.io/move-reminder/).

### Example

```
Linear algebra
   Vectors
   Matrices
      Square
      Identity
   Orthogonality
```

### Usage

1. Compile all your mind maps to a text file similar to [this one](https://denisidoro.github.io/move-reminder/mindmaps.txt)
   - you can either write it directly
   - or you can edit files in [./mindmaps](https://github.com/denisidoro/move-reminder/tree/master/mindmaps) accordingly and run [./scripts/compile-mindmaps](https://github.com/denisidoro/move-reminder/blob/master/scripts/compile-mindmaps) to have an output at [./public](https://github.com/denisidoro/move-reminder/blob/master/public)/mindmaps.txt
2. Upload this file somewhere — e.g. [Github Gist](https://gist.github.com/)
2. Open the app using the `?url=` parameter
   - e.g. [denisidoro.github.io/move-reminder/?url=https://gist.github.com/denisidoro/5b45ce137b4239ff03f7e0c406053d3a](https://denisidoro.github.io/move-reminder/?url=https://gist.github.com/denisidoro/5b45ce137b4239ff03f7e0c406053d3a)

### Etymology

In the [Pokémon series](https://en.wikipedia.org/wiki/Pok%C3%A9mon), a [Move Reminder](https://bulbapedia.bulbagarden.net/wiki/Move_Reminder) is a character who can teach a Pokémon any move it has forgotten.

## You may also like

- [markmap](https://github.com/gera2ld/markmap/)
- [text2mindmap](https://tobloef.com/text2mindmap/)
