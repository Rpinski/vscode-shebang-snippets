import * as vscode from "vscode";
import { Shebang } from "./types";

export function getLastShebangs(extensionContext: vscode.ExtensionContext) {
  return extensionContext.globalState.get<string[]>("lastShebangs") ?? [];
}

export function setLastShebang(
  extensionContext: vscode.ExtensionContext,
  lastShebang: Shebang
) {
  const oldLastShebangs = getLastShebangs(extensionContext);
  const newLastShebangs = [
    lastShebang.executable,
    ...oldLastShebangs.filter((shebang) => shebang !== lastShebang.executable),
  ];
  extensionContext.globalState.update("lastShebangs", newLastShebangs);
}
