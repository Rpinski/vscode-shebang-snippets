import * as vscode from "vscode";

export const SET_DOCUMENT_LANGUAGE_COMMAND =
  "shebang-snippets.setDocumentLanguage";

export function registerSetDocumentLanguageCommand() {
  return vscode.commands.registerCommand(
    SET_DOCUMENT_LANGUAGE_COMMAND,
    async (document: vscode.TextDocument, language: string) => {
      if (document.languageId === "plaintext") {
        vscode.languages.setTextDocumentLanguage(document, language);
      }
    }
  );
}
