import * as vscode from "vscode";
import { CustomShebangExecutionPaths, Shebang } from "./types";
import { getShebangKey } from "./utils";

export function getLastShebangs(extensionContext: vscode.ExtensionContext) {
  return extensionContext.globalState.get<string[]>("lastShebangs") ?? [];
}

export function setLastShebang(
  extensionContext: vscode.ExtensionContext,
  lastShebang: Shebang,
  executablePath: string
) {
  const oldLastShebangs = getLastShebangs(extensionContext);
  const newShebang = `${executablePath}${lastShebang.executable}`;
  const newLastShebangs = [
    newShebang,
    ...oldLastShebangs.filter((shebang) => shebang !== newShebang),
  ];
  extensionContext.globalState.update("lastShebangs", newLastShebangs);
}

export function getLastExecutedVersion(
  extensionContext: vscode.ExtensionContext
) {
  return extensionContext.globalState.get<string>("lastExecutedVersion");
}

export function setLastExecutedVersion(
  extensionContext: vscode.ExtensionContext
) {
  extensionContext.globalState.update(
    "lastExecutedVersion",
    extensionContext.extension.packageJSON.version ?? ""
  );
}

export function getCustomShebangExecPaths() {
  return (
    vscode.workspace
      .getConfiguration("shebang-snippets")
      .get<CustomShebangExecutionPaths>("customShebangExecPaths") ?? {}
  );
}

export function getCustomShebangExecPathsForShebang(shebang: Shebang) {
  const shebangKey = getShebangKey(shebang);
  if (!shebangKey) {
    return [];
  }
  return getCustomShebangExecPaths()[shebangKey] ?? [];
}

export function saveCustomShebangExecPath(shebang: Shebang, customExecPath: string) {
  const shebangKey = getShebangKey(shebang);
  if (!shebangKey) {
    return;
  }

  const currentSetting = getCustomShebangExecPaths();
  const customPaths = currentSetting[shebangKey] ?? [];
  if (!customPaths.includes(customExecPath)) {
    customPaths.push(customExecPath);
  }
  vscode.workspace
    .getConfiguration("shebang-snippets")
    .update(
      "customShebangExecPaths",
      { ...currentSetting, [shebangKey]: customPaths },
      vscode.ConfigurationTarget.Global
    );
}