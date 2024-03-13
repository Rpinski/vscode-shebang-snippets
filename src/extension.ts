import * as vscode from "vscode";
import { registerShebangCompletionProviders } from "./createShebangCompletionProvider";
import OutputWindowLogger from "./OutputWindowLogger";

export function activate(context: vscode.ExtensionContext) {
  const logger = new OutputWindowLogger();
  logger.writeLine("Shebang Snippets extension is active");

  context.subscriptions.concat(registerShebangCompletionProviders());
}

export function deactivate() {}
