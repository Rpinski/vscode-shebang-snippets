import * as vscode from "vscode";
import { CompletionItem } from "vscode";
import {
  createMagicCommentCompletionItem,
  createShebangCompletionItem,
} from "./completionItemConverters";

export type BasicSnippet = {
  description: string;
  toCompletionItem: (
    snippet: Snippet,
    document: vscode.TextDocument,
    precedingHash: boolean
  ) => CompletionItem | undefined;
};

export type Shebang = BasicSnippet & {
  type: "Shebang";
  executable: string;
  language?: string;
};

export function shebang(
  params: Omit<Shebang, "type" | "toCompletionItem">
): Shebang {
  return {
    ...params,
    type: "Shebang",
    toCompletionItem: createShebangCompletionItem,
  };
}

export type MagicComment = BasicSnippet & {
  type: "MagicComment";
};

export function magicComment(
  params: Omit<MagicComment, "type" | "toCompletionItem">
): MagicComment {
  return {
    ...params,
    type: "MagicComment",
    toCompletionItem: createMagicCommentCompletionItem,
  };
}

export type Snippet = Shebang | MagicComment;

export type SnippetLanguages = { [language: string]: Snippet[] };
