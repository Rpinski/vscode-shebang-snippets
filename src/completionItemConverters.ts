import * as vscode from "vscode";
import { MagicComment, RankCreator, Shebang, Snippet } from "./types";
import { HANDLE_SNIPPET_COMPLETION_COMMAND } from "./handleSnippetCompletionCommand";
import { getCustomShebangExecPathsForShebang } from "./settings";
import { Shebangs } from "./snippets";

export function createShebangCompletionItems(
  snippet: Snippet,
  document: vscode.TextDocument,
  precedingHash: boolean,
  rankCreator?: RankCreator
) {
  if (snippet.type === "Shebang") {
    return [
      createShebangSnippetCompletion(
        "/usr/bin/",
        snippet,
        document,
        precedingHash,
        rankCreator
      ),
      createShebangSnippetCompletion(
        snippet.executable.includes(" ") ? "/usr/bin/env -S " : "/usr/bin/env ",
        snippet,
        document,
        precedingHash,
        rankCreator
      ),
      ...getCustomShebangExecPathsForShebang(snippet).map((execPath) =>
        createShebangSnippetCompletion(
          execPath,
          snippet,
          document,
          precedingHash,
          rankCreator
        )
      ),
    ];
  }
}

function createShebangSnippetCompletion(
  executablePath: string,
  shebangSnippet: Shebang,
  document: vscode.TextDocument,
  precedingHash: boolean,
  rankCreator?: RankCreator
) {
  const completedShebang = `#!${executablePath}${shebangSnippet.executable}`;
  const snippetCompletion = new vscode.CompletionItem(completedShebang);
  snippetCompletion.insertText = new vscode.SnippetString(
    completedShebang.substring(precedingHash ? 1 : 0)
  );
  snippetCompletion.documentation = shebangSnippet.description;
  snippetCompletion.kind = vscode.CompletionItemKind.Snippet;
  snippetCompletion.sortText = rankCreator?.(shebangSnippet, executablePath)
    ?.toString()
    .padStart(5, "0");
  if (shebangSnippet.language) {
    snippetCompletion.command = {
      command: HANDLE_SNIPPET_COMPLETION_COMMAND,
      title: HANDLE_SNIPPET_COMPLETION_COMMAND,
      arguments: [document, shebangSnippet, executablePath],
    };
  }
  return snippetCompletion;
}

export function createMagicCommentCompletionItem(
  snippet: Snippet,
  document: vscode.TextDocument,
  precedingHash: boolean,
  rankCreator?: RankCreator
) {
  if (snippet.type === "MagicComment") {
    const snippetCompletion = new vscode.CompletionItem("-*- coding: ...");
    snippetCompletion.insertText = new vscode.SnippetString(
      (precedingHash ? "" : "#") + " -*- coding: ${1|utf-8,latin-1,ascii|} -*-"
    );
    snippetCompletion.documentation = snippet.description;
    snippetCompletion.kind = vscode.CompletionItemKind.Snippet;
    return [snippetCompletion];
  }
}