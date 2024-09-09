import * as vscode from "vscode";
import { getLastExecutedVersion, setLastExecutedVersion } from "./settings";

export async function showWhatsNewTeaserIfNeeded(
  extensionContext: vscode.ExtensionContext
) {
  const currentVersion = extensionContext.extension.packageJSON.version;
  if (
    wasExtensionUpdatedSinceLastStart(extensionContext) &&
    currentVersion === "1.0.0"
  ) {
    const message = "Welcome to Shebang Snippets";
    const versionInMessage =
      currentVersion !== undefined ? ` ${currentVersion}` : "";
    const result = await vscode.window.showInformationMessage(
      `${message}${versionInMessage}!`,
      "What's new?"
    );
    if (result === "What's new?") {
      vscode.env.openExternal(
        vscode.Uri.parse(
          "https://github.com/Rpinski/vscode-shebang-snippets/blob/master/CHANGELOG.md"
        )
      );
    }

    setLastExecutedVersion(extensionContext);
  }
}

function wasExtensionUpdatedSinceLastStart(
  extensionContext: vscode.ExtensionContext
) {
  return (
    extensionContext.extension.packageJSON.version !==
    getLastExecutedVersion(extensionContext)
  );
}
