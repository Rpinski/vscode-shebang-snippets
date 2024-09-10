## Release Notes

### 1.0.0

- Complete rewrite of extension, now being a real editor extension instead of just a collection of snippets
- Shebang suggestions now only shown at beginning of 1st line and not anywhere in document
- After completing a shebang line, document language is automatically updated appropritately
- Support for zsh and Nushell shebangs
- Shebangs with `/usr/bin/...` and `/usr/bin/env ...` are both supported
- The extension learns from its usage, frequently used shebangs are preferred in suggestion list

### 0.1.4

Added shebang snippets for PowerShell Core.

### 0.1.3

Added shebang snippets for Groovy.

### 0.1.2

Added choice between `python3` and `python` in Python shebang snippets. ([#4](https://github.com/Rpinski/vscode-shebang-snippets/issues/4))

### 0.1.1

Using `#!/usr/bin/env sh` instead of `#!/usr/bin/sh` (also for bash) - thanks to [Andrii Melekhovskiy](https://github.com/morkot))

### 0.1.0

Added support for encoding magic comments in Python, Ruby and shell scripts (thanks to [Julien Grave](https://github.com/JulienGrv))

### 0.0.3

Initial release with support of sh, bash, expect, Perl, Python, Ruby, PHP, Node.js, Lua, F#.