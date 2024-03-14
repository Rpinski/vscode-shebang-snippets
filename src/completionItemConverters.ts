import * as vscode from "vscode";
import { Snippet } from "./types";
import { SET_DOCUMENT_LANGUAGE_COMMAND } from "./setDocumentLanguageCommand";

export function createShebangCompletionItem(
  snippet: Snippet,
  document: vscode.TextDocument,
  precedingHash: boolean
) {
  if (snippet.type === "Shebang") {
    const completedShebang = `#!/usr/bin/env ${snippet.executable}`;
    const snippetCompletion = new vscode.CompletionItem(completedShebang);
    snippetCompletion.insertText = new vscode.SnippetString(
      completedShebang.substring(precedingHash ? 1 : 0)
    );
    snippetCompletion.documentation = snippet.description;
    snippetCompletion.kind = vscode.CompletionItemKind.Snippet;
    if (snippet.language) {
      snippetCompletion.command = {
        command: SET_DOCUMENT_LANGUAGE_COMMAND,
        title: SET_DOCUMENT_LANGUAGE_COMMAND,
        arguments: [document, snippet.language],
      };
    }
    return snippetCompletion;
  }
}

export function createMagicCommentCompletionItem(
  snippet: Snippet,
  document: vscode.TextDocument,
  precedingHash: boolean
) {
  if (snippet.type === "MagicComment") {
    const snippetCompletion = new vscode.CompletionItem("-*- coding: ...");
    snippetCompletion.insertText = new vscode.SnippetString(
      (precedingHash ? "" : "#") + " -*- coding: ${1|utf-8,latin-1,ascii|} -*-"
    );
    snippetCompletion.documentation = snippet.description;
    snippetCompletion.kind = vscode.CompletionItemKind.Snippet;
    return snippetCompletion;
  }
}
