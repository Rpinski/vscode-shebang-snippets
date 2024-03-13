import * as vscode from "vscode";
import { languages } from "./languages";
import { Snippet } from "./types";

export function registerShebangCompletionProviders() {
  return Object.entries(languages).map(([language, shebangs]) =>
    registerShebangCompletionProvider(language, shebangs)
  );
}

function registerShebangCompletionProvider(
  language: string,
  snippets: Snippet[]
) {
  return vscode.languages.registerCompletionItemProvider(
    language,
    {
      async provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
      ) {
        if (position.character <= 1) {
          const precedingHash = position.character === 1;
          if (position.line === 0) {
            return Array.from(
              createCompletionItemsFromSnippets(
                snippets,
                "Shebang",
                precedingHash
              )
            );
          } else if (position.line === 1) {
            return Array.from(
              createCompletionItemsFromSnippets(
                snippets,
                "MagicComment",
                precedingHash
              )
            );
          }
        }
      },
    },
    "#"
  );
}

function* createCompletionItemsFromSnippets(
  snippets: Snippet[],
  type: Snippet["type"],
  precedingHash: boolean
) {
  for (let snippet of snippets) {
    if (snippet.type === type) {
      const completionItem = snippet.toCompletionItem(snippet, precedingHash);
      if (completionItem) {
        yield completionItem;
      }
    }
  }
}
