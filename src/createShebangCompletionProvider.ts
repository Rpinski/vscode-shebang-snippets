import * as vscode from "vscode";
import { languages } from "./languages";
import { Shebang, Snippet } from "./types";
import { getLastShebangs } from "./settings";

export function registerShebangCompletionProviders(
  extensionContext: vscode.ExtensionContext
) {
  return Object.entries(languages).map(([language, shebangs]) =>
    registerShebangCompletionProvider(extensionContext, language, shebangs)
  );
}

function registerShebangCompletionProvider(
  extensionContext: vscode.ExtensionContext,
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
          if (
            position.line === 0 &&
            (!precedingHash ||
              document.getText(new vscode.Range(0, 0, 0, 1)) === "#")
          ) {
            const lastShebangs = getLastShebangs(extensionContext);
            return Array.from(
              createCompletionItemsFromSnippets(
                extensionContext,
                snippets,
                "Shebang",
                document,
                precedingHash,
                (snippet: Shebang) => {
                  const lastShebangIndex = lastShebangs.findIndex(
                    (lastShebang) => lastShebang === snippet.executable
                  );
                  return lastShebangIndex > -1 ? lastShebangIndex : 100000;
                }
              )
            );
          } else if (position.line === 1) {
            return Array.from(
              createCompletionItemsFromSnippets(
                extensionContext,
                snippets,
                "MagicComment",
                document,
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

function* createCompletionItemsFromSnippets<T extends Snippet>(
  extensionContext: vscode.ExtensionContext,
  snippets: Snippet[],
  type: T["type"],
  document: vscode.TextDocument,
  precedingHash: boolean,
  rankCreator?: (snippet: T) => number
) {
  for (let snippet of snippets) {
    if (snippet.type === type) {
      const completionItem = snippet.toCompletionItem(
        snippet,
        document,
        precedingHash,
        rankCreator?.(snippet as T)
      );
      if (completionItem) {
        yield completionItem;
      }
    }
  }
}
