import { MagicComments, Shebangs } from "./snippets";
import { SnippetLanguages } from "./types";

export const languages: SnippetLanguages = {
  plaintext: Object.values(Shebangs),
  shellscript: [Shebangs.sh, Shebangs.bash, Shebangs.zsh, Shebangs.nu],
  fsharp: [Shebangs.fsharp],
  groovy: [Shebangs.groovy],
  javascript: [Shebangs.node],
  lua: [Shebangs.lua],
  perl: [Shebangs.perl],
  php: [Shebangs.php],
  powershell: [Shebangs.pwsh],
  python: [Shebangs.python, Shebangs.python3, MagicComments.encoding],
  ruby: [Shebangs.ruby, MagicComments.encoding],
  typescript: [Shebangs.tsx, Shebangs.tsnode],
};
