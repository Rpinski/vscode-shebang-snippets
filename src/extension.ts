import * as vscode from "vscode";
import { registerShebangCompletionProviders } from "./createShebangCompletionProvider";
import OutputWindowLogger from "./OutputWindowLogger";
import { registerSetDocumentLanguageCommand } from "./setDocumentLanguageCommand";

export function activate(context: vscode.ExtensionContext) {
  const logger = new OutputWindowLogger();
  logger.writeLine("Shebang Snippets extension is active");

  context.subscriptions.concat(registerShebangCompletionProviders());
  context.subscriptions.push(registerSetDocumentLanguageCommand());
}

export function deactivate() {}
