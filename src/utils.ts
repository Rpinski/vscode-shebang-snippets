import { Shebangs } from "./snippets";
import { Shebang } from "./types";

export function getShebangKey(shebang: Shebang): string | undefined {
  const entry = Object.entries(Shebangs).find(([_, val]) => val === shebang);
  return entry ? entry[0] : undefined;
}
