import { magicComment, shebang } from "./types";

export const Shebangs = {
  sh: shebang({
    executable: "sh",
    description: "Adds a shebang for 'sh' shell scripts",
  }),

  bash: shebang({
    executable: "bash",
    description: "Adds a shebang for 'bash' shell scripts",
  }),

  zsh: shebang({
    executable: "zsh",
    description: "Adds a shebang for 'zsh' shell scripts",
  }),

  expect: shebang({
    label: "expect",
    executable: "expect -f",
    description: "Adds a shebang for 'expect' scripts",
  }),

  fsharp: shebang({
    label: "fsharp",
    executable: "fsharpi --exec",
    description: "Shebang for F# interpreter",
  }),

  groovy: shebang({
    executable: "groovy",
    description: "Adds a shebang for Groovy scripts",
  }),

  node: shebang({
    executable: "node",
    description: "Adds a shebang for JavaScript executed with Node.js",
  }),

  lua: shebang({
    executable: "lua",
    description: "Adds a shebang for Lua scripts",
  }),

  perl: shebang({
    executable: "perl",
    description: "Adds a shebang for Perl scripts",
  }),

  php: shebang({
    executable: "php",
    description: "Adds a shebang for PHP scripts",
  }),

  pwsh: shebang({
    executable: "pwsh",
    description: "Adds a shebang for PowerShell Core scripts.",
  }),

  python: shebang({
    executable: "python",
    description: "Adds a shebang for Python scripts",
  }),

  python3: shebang({
    executable: "python3",
    description: "Adds a shebang for Python 3 scripts",
  }),

  ruby: shebang({
    executable: "ruby",
    description: "Adds a shebang for Ruby scripts",
  }),
};

export const MagicComments = {
  encoding: magicComment({
    label: "Encoding",
    description: "Adds magic comment for script encoding",
  }),
};
