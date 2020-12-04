# @beamwind/typescript-plugincript-plugin

> TypeScript language service plugin that adds IntelliSense for [beamwind](https://beamwind.js.org)

[![MIT License](https://flat.badgen.net/github/license/kenoxa/beamwind)](https://github.com/kenoxa/beamwind/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/@beamwind/typescript-plugin?icon=npm&label)](https://www.npmjs.com/package/@beamwind/typescript-plugin)
[![Github](https://flat.badgen.net/badge/icon/kenoxa%2Fbeamwind?icon=github&label)](https://github.com/kenoxa/beamwind/blob/main/packages/typescript-plugin)

> [Read the docs](https://beamwind.js.org) |
> [Change Log](https://github.com/kenoxa/beamwind/blob/main/packages/typescript-plugin/CHANGELOG.md)

---

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Features

Provides editor support for ```tw`...```` tagged template syntax including:

- Autocomplete for tailwind, beamwind and oceanwin classes
- Warnings on unknown classes
- Quick fixes for misspelled property names.


## Installation

```sh
npm install --save-dev @beamwind/typescript-plugin
```

## Usage

> Please refer to the [main documentation](https://beamwind.js.org#usage) for further information.

This plugin requires TypeScript 2.4 or later. It can provide intellisense in both JavaScript and TypeScript files within any editor that uses TypeScript to power their language features. This includes [VS Code](https://code.visualstudio.com), [Sublime with the TypeScript plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin), [Atom with the TypeScript plugin](https://atom.io/packages/atom-typescript), [Visual Studio](https://www.visualstudio.com), and others. 

### With VS Code

Just install the [VS Code Beamwind extension](https://github.com/kenoxa/beamwind/packages/vscode). This extension adds syntax highlighting and IntelliSense for styled components in JavaScript and TypeScript files.

If you are using a [workspace version of TypeScript]((https://code.visualstudio.com/Docs/languages/typescript#_using-newer-typescript-versions)) however, you must manually install the plugin along side the version of TypeScript in your workspace.

Then add a `plugins` section to your [`tsconfig.json`](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html) or [`jsconfig.json`](https://code.visualstudio.com/Docs/languages/javascript#_javascript-project-jsconfigjson)

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "@beamwind/typescript-plugin"
      }
    ]
  }
}
```

Finally, run the `Select TypeScript version` command in VS Code to switch to use the workspace version of TypeScript for VS Code's JavaScript and TypeScript language support. You can find more information about managing typescript versions [in the VS Code documentation](https://code.visualstudio.com/Docs/languages/typescript#_using-newer-typescript-versions).

### With Sublime

This plugin works with the [Sublime TypeScript plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin).

And configure Sublime to use the workspace version of TypeScript by [setting the `typescript_tsdk`](https://github.com/Microsoft/TypeScript-Sublime-Plugin#note-using-different-versions-of-typescript) setting in Sublime:

```json
{
  "typescript_tsdk": "/path/to/the/project/node_modules/typescript/lib"
}
```

Finally add a `plugins` section to your [`tsconfig.json`](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html) or [`jsconfig.json`](https://code.visualstudio.com/Docs/languages/javascript#_javascript-project-jsconfigjson) and restart Sublime.

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "@beamwind/typescript-plugin"
      }
    ]
  }
}
```

### With Atom

This plugin works with the [Atom TypeScript plugin](https://atom.io/packages/atom-typescript).


Then add a `plugins` section to your [`tsconfig.json`](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html) or [`jsconfig.json`](https://code.visualstudio.com/Docs/languages/javascript#_javascript-project-jsconfigjson) and restart Atom.

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "@beamwind/typescript-plugin"
      }
    ]
  }
}
```

To get sytnax highlighting for styled strings in Atom, consider installing the [language-babel](https://atom.io/packages/language-babel) extension.

### With Visual Studio

This plugin works [Visual Studio 2017](https://www.visualstudio.com) using the TypeScript 2.5+ SDK.

Then add a `plugins` section to your [`tsconfig.json`](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "@beamwind/typescript-plugin"
      }
    ]
  }
}
```

Then reload your project to make sure the plugin has been loaded properly. Note that `jsconfig.json` projects are currently not supported in VS.

## Configuration

### Tags

This plugin adds IntelliSense to any template literal [tagged](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) with `tw`, `ow` or `bw`:

```js
import { bw } from 'beamwind'

bw`
  sm:hover:(
    bg-black
    text-white
  )
  md:(bg-white hover:text-black)
`
```

You can enable IntelliSense for other tag names by configuring `"tags"`:

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "@beamwind/typescript-plugin",
        "tags": [
          "tw",
          "cx"
        ]
      }
    ]
  }
}
```

Now strings tagged with either `tw` and `cx` will have IntelliSense.

## Contribute

Thanks for being willing to contribute!

> This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/kenoxa/beamwind). Feel free to [open an issue](https://github.com/kenoxa/beamwind/issues) if you have any idea, question, or you've found a bug.

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

### Manual testing the Language service plugin

You can check manually language service plugin features with our example project.

```
yarn build
cd dist
yarn link
cd project-fixtures/react-apollo-prj
yarn install
yarn link @beamwind/typescript-plugin
code . # Or launch editor/IDE what you like
```

Of course, you can use other editor which communicates with tsserver .

### Sponsors

[![Kenoxa GmbH](https://images.opencollective.com/kenoxa/9c25796/logo/68.png)](https://www.kenoxa.com) [Kenoxa GmbH](https://www.kenoxa.com)

## License

[MIT](https://github.com/kenoxa/beamwind/blob/main/LICENSE) © [Kenoxa GmbH](https://kenoxa.com)
