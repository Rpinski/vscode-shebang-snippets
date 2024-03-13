import * as vscode from "vscode";
import { MagicComment, Shebang, Snippet } from "./types";

export function createShebangCompletionItem(
  snippet: Snippet,
  precedingHash: boolean
) {
  if (snippet.type === "Shebang") {
    const snippetCompletion = new vscode.CompletionItem(
      snippet.label ?? snippet.executable
    );
    snippetCompletion.insertText = new vscode.SnippetString(
      `${precedingHash ? "" : "#"}!/usr/bin/env ${snippet.executable}`
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
    const snippetCompletion = new vscode.CompletionItem(
      snippet.label ?? "Encoding"
    );
    snippetCompletion.insertText = new vscode.SnippetString(
      (precedingHash ? "" : "#") + " -*- coding: ${1|utf-8,latin-1,ascii|} -*-"
    );
    snippetCompletion.documentation = snippet.description;
    return snippetCompletion;
  }
}
