# Session 1 — VS Code fundamentals + Extensions

## Objectives

- Explore VS Code UI, Command Palette, and Settings Sync
- Install and review key extensions (Prettier, Live Server, ESLint)
- Configure Prettier as the default formatter and enable `formatOnSave`

---

## Tasks

- Explore VS Code UI and shortcuts
- Turn on Settings Sync
- Install: **Prettier**, **Live Server**, **ESLint**
- Review each extension in depth
- Add workspace settings to `.vscode/settings.json`

---

## Deliverables

- `.vscode/settings.json` committed (Prettier + formatOnSave)
- List of installed and recommended extensions (this README)

---

## Installed / Recommended Extensions

- **Prettier — Code formatter** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`)
- **Live Server** (`ritwickdey.LiveServer`)

You can install them from the Extensions view (Ctrl+Shift+X) or via CLI:

```bash
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension ritwickdey.LiveServer
 VS Code Workspace Settings
.vscode/settings.json example:

json
Copy code
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true
}

📚 Resources
VS Code Tips and Tricks - https://code.visualstudio.com/docs/getstarted/tips-and-tricks

VS Code Extension Marketplace - https://marketplace.visualstudio.com/vscode?utm_source=chatgpt.com

Prettier VS Code Extension - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode&utm_source=chatgpt.com

Live Server Extension - https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&utm_source=chatgpt.com

ESLint - Visual Studio Marketplace - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint&utm_source=chatgpt.com

VS Code Keyboard Shortcuts (Windows) - https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf?utm_source=chatgpt.com

Visual Studio Code tips and tricks for power users - https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-ide-tips-and-tricks?utm_source=chatgpt.com
```
