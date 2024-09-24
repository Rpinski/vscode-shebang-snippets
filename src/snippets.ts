import { magicComment, shebang } from "./types";

export const Shebangs = {
  sh: shebang({
    executable: "sh",
    description: "Adds a shebang for 'sh' shell scripts",
    language: "shellscript",
  }),

  bash: shebang({
    executable: "bash",
    description: "Adds a shebang for 'bash' shell scripts",
    language: "shellscript",
  }),

  zsh: shebang({
    executable: "zsh",
    description: "Adds a shebang for 'zsh' shell scripts",
    language: "shellscript",
  }),

  nu: shebang({
    executable: "nu",
    description: "Adds a shebang for 'nu' shell scripts",
    language: "shellscript",
  }),

  expect: shebang({
    executable: "expect -f",
    description: "Adds a shebang for 'expect' scripts",
    language: "shellscript",
  }),

  fsharp: shebang({
    executable: "dotnet fsi",
    description: "Shebang for F# interpreter",
    language: "fsharp",
  }),

  groovy: shebang({
    executable: "groovy",
    description: "Adds a shebang for Groovy scripts",
    language: "groovy",
  }),

  node: shebang({
    executable: "node",
    description: "Adds a shebang for JavaScript executed with Node.js",
    language: "javascript",
  }),

  lua: shebang({
    executable: "lua",
    description: "Adds a shebang for Lua scripts",
    language: "lua",
  }),

  perl: shebang({
    executable: "perl",
    description: "Adds a shebang for Perl scripts",
    language: "perl",
  }),

  php: shebang({
    executable: "php",
    description: "Adds a shebang for PHP scripts",
    language: "php",
  }),

  pwsh: shebang({
    executable: "pwsh",
    description: "Adds a shebang for PowerShell Core scripts.",
    language: "powershell",
  }),

  python: shebang({
    executable: "python",
    description: "Adds a shebang for Python scripts",
    language: "python",
  }),

  python3: shebang({
    executable: "python3",
    description: "Adds a shebang for Python 3 scripts",
    language: "python",
  }),

  ruby: shebang({
    executable: "ruby",
    description: "Adds a shebang for Ruby scripts",
    language: "ruby",
  }),
};

export const MagicComments = {
  encoding: magicComment({
    description: "Adds magic comment for script encoding",
  }),
};
