import * as vscode from "vscode";
import { MagicComment, Shebang, Snippet } from "./types";

export function createShebangCompletionItem(
  snippet: Snippet,
  precedingHash: boolean
) {
  if (snippet.type === "Shebang") {
    const completedShebang = `#!/usr/bin/env ${snippet.executable}`;
    const snippetCompletion = new vscode.CompletionItem(completedShebang);
    snippetCompletion.insertText = new vscode.SnippetString(
      completedShebang.substring(precedingHash ? 1 : 0)
    );
    snippetCompletion.documentation = snippet.description;
    return snippetCompletion;
  }
}

export function createMagicCommentCompletionItem(
  snippet: Snippet,
  precedingHash: boolean
) {
  if (snippet.type === "MagicComment") {
    const snippetCompletion = new vscode.CompletionItem("-*- coding: ...");
    snippetCompletion.insertText = new vscode.SnippetString(
      (precedingHash ? "" : "#") + " -*- coding: ${1|utf-8,latin-1,ascii|} -*-"
    );
    snippetCompletion.documentation = snippet.description;
    return snippetCompletion;
  }
}
