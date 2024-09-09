import * as vscode from "vscode";
import { registerShebangCompletionProviders } from "./createShebangCompletionProvider";
import OutputWindowLogger from "./OutputWindowLogger";
import { registerHandleSnippetCompletionCommand } from "./handleSnippetCompletionCommand";
import { showWhatsNewTeaserIfNeeded } from "./whatsNewTeaser";

export function activate(context: vscode.ExtensionContext) {
  const logger = new OutputWindowLogger();
  logger.writeLine("Shebang Snippets extension is active");

  context.subscriptions.concat(registerShebangCompletionProviders(context));
  context.subscriptions.push(registerHandleSnippetCompletionCommand(context));

  showWhatsNewTeaserIfNeeded(context);
}

export function deactivate() {}
