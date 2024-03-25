import * as vscode from "vscode";
import { Snippet } from "./types";
import { HANDLE_SNIPPET_COMPLETION_COMMAND } from "./handleSnippetCompletionCommand";

export function createShebangCompletionItem(
  snippet: Snippet,
  document: vscode.TextDocument,
  precedingHash: boolean,
  sortRank?: number
) {
  if (snippet.type === "Shebang") {
    const completedShebang = `#!/usr/bin/env ${snippet.executable}`;
    const snippetCompletion = new vscode.CompletionItem(completedShebang);
    snippetCompletion.insertText = new vscode.SnippetString(
      completedShebang.substring(precedingHash ? 1 : 0)
    );
    snippetCompletion.documentation = snippet.description;
    snippetCompletion.kind = vscode.CompletionItemKind.Snippet;
    snippetCompletion.sortText = sortRank?.toString().padStart(5, "0");
    if (snippet.language) {
      snippetCompletion.command = {
        command: HANDLE_SNIPPET_COMPLETION_COMMAND,
        title: HANDLE_SNIPPET_COMPLETION_COMMAND,
        arguments: [document, snippet],
      };
    }
    return snippetCompletion;
  }
}

export function createMagicCommentCompletionItem(
  snippet: Snippet,
  document: vscode.TextDocument,
  precedingHash: boolean,
  sortRank?: number
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
