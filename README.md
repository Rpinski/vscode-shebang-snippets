# Shebang Snippets

[![Visual Studio Marketplace](https://img.shields.io/vscode-marketplace/v/rpinski.shebang-snippets.svg?label=VS%20Marketplace&color=blue)](https://marketplace.visualstudio.com/items?itemName=rpinski.shebang-snippets) [![Open VSX](https://img.shields.io/open-vsx/v/rpinski/shebang-snippets?label=Open%20VSX&color=blue)](https://open-vsx.org/extension/rpinski/shebang-snippets)

Set of snippets for [Visual Studio Code](https://code.visualstudio.com/) to insert "shebang" lines for various types of scripts and interpreters used on Unix-like systems.

## Features

### Shebang Snippets

After opening a new file you can just type `#` or press `CTRL`+`SPACE` at the beginning of the first line to add the full line:

![Shebang Snippets in action](https://raw.githubusercontent.com/Rpinski/vscode-shebang-snippets/master/images/readme-shebang-snippet.png)

Currently supported shebang snippets:

- Shell:
  - `sh`
  - `bash`
  - `zsh`
- Expect: `expect -f`
- Perl: `perl`
- Lua: `lua`
- Python:
  - `python`
  - `python3`
- PHP: `php`
- Node: `node`
- F#: `fsharpi --exec`
- Ruby: `ruby`
- Groovy: `groovy`
- PowerShell Core: `pwsh`

### Magic Comments for Encoding

For some languages the magic comment for encoding

`# -*- coding: utf-8 -*-`

can be inserted by typing `#` at the beginning of the second line. The snippet offers different encodings for selection.

![Complete magic comment for encoding](https://raw.githubusercontent.com/Rpinski/vscode-shebang-snippets/master/images/readme-magic-comment-snippet1.png)

![Encoding selection](https://raw.githubusercontent.com/Rpinski/vscode-shebang-snippets/master/images/readme-magic-comment-snippet2.png)

### Automatic Selection of Language Mode

After inserting a shebang snippet the extension automatically switches current editor tab to the appropriate language. For example, if you insert a shebang for the Python interpreter, the editor will switch to "Python" mode.

![Language Mode selection](https://raw.githubusercontent.com/Rpinski/vscode-shebang-snippets/master/images/readme-language-mode1.png)

![Language Mode in Status Bar](https://raw.githubusercontent.com/Rpinski/vscode-shebang-snippets/master/images/readme-language-mode2.png)