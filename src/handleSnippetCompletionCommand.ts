import * as vscode from "vscode";
import { Snippet } from "./types";
import { setLastShebang } from "./settings";

export const HANDLE_SNIPPET_COMPLETION_COMMAND =
  "shebang-snippets.handleSnippetCompletion";

export function registerHandleSnippetCompletionCommand(
  extensionContext: vscode.ExtensionContext
) {
  return vscode.commands.registerCommand(
    HANDLE_SNIPPET_COMPLETION_COMMAND,
    async (
      document: vscode.TextDocument,
      snippet: Snippet,
      executablePath: string
    ) => {
      if (snippet.type === "Shebang") {
        if (document.languageId === "plaintext" && snippet.language) {
          vscode.languages.setTextDocumentLanguage(document, snippet.language);
        }
        setLastShebang(extensionContext, snippet, executablePath);
      }
    }
  );
}
