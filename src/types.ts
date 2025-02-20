import * as vscode from "vscode";
import { CompletionItem } from "vscode";
import {
  createMagicCommentCompletionItem,
  createShebangCompletionItems,
} from "./completionItemConverters";

export type SnippetRankCreator = (snippet: Snippet) => number;
export type ShebangRankCreator = (
  shebang: Shebang,
  executablePath: string
) => number;
export type RankCreator = SnippetRankCreator | ShebangRankCreator;

export type BasicSnippet = {
  description: string;
  toCompletionItems: (
    snippet: Snippet,
    document: vscode.TextDocument,
    precedingHash: boolean,
    rankCreator?: RankCreator
  ) => CompletionItem[] | undefined;
};

export type Shebang = BasicSnippet & {
  type: "Shebang";
  executable: string;
  language?: string;
};

export function shebang(params: Omit<Shebang, "type" | "toCompletionItems">): Shebang {
  return {
    ...params,
    type: "Shebang",
    toCompletionItems: createShebangCompletionItems,
  };
}

export type MagicComment = BasicSnippet & {
  type: "MagicComment";
};

export function magicComment(
  params: Omit<MagicComment, "type" | "toCompletionItems">
): MagicComment {
  return {
    ...params,
    type: "MagicComment",
    toCompletionItems: createMagicCommentCompletionItem,
  };
}

export type Snippet = Shebang | MagicComment;

export type SnippetLanguages = Record<string, Snippet[]>;
