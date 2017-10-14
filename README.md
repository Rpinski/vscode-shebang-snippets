# Shebang Snippets

Set of snippets for Visual Studio Code to insert "shebang" lines for various types of scripts and interpreters used on Unix-like systems.

## Features

After opening a new file you can just type `#!` and the interpreter name to add the full line. Currently supported shebang snippets:

- Shell:
  - `#!sh` -> `#!/bin/sh`
  - `#!bash` -> `#!/bin/bash`
- Expect: `#!expect` -> `#!/usr/bin/expect -f`
- Perl: `#!perl` -> `#!/usr/bin/env perl`
- Lua: `#!lua` -> `#!/usr/bin/env lua`
- Python:
  - `#!python` -> `#!/usr/bin/env python`
  - `#!python+encoding` ->
    - `#!/usr/bin/env python`
    - `# -*- coding: utf-8 -*-`
- PHP: `#!php` -> `#!/usr/bin/env php`
- Node: `#!node` -> `#!/usr/bin/env node`
- F#: `#!fsharp` -> `#!/usr/bin/env fsharpi --exec`
- Ruby:
  - `#!ruby` -> `#!/usr/bin/env ruby`
  - `#!ruby+encoding` ->
    - `#!/usr/bin/env ruby`
    - `# -*- coding: utf-8 -*-`

![Shebang Snippets in action](https://raw.githubusercontent.com/Rpinski/vscode-shebang-snippets/master/images/snippet.gif)

If you have already saved your script with appropriate file extension and need the shebang, you can alternatively just start typing `shebang` to complete the line for your script type.