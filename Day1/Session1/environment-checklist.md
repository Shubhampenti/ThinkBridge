# 🛠 Onboarding Tools - Environment Setup

##  Objectives

- Install core development tools.
- Understand setup expectations.
- Master terminal basics for navigation, file operations, and aliases.

---

##  Tasks

- Install **Visual Studio Code, .NET SDK (LTS), Node.js (LTS), Git, and Azure Data Studio**.
- Configure VS Code with extensions: **C# (OmniSharp), ESLint, Prettier, GitHub Copilot (trial/if available)**.
- Learn essential shell basics: **navigation, file operations, and aliases**.

---

##  Core Tools Installation

- **[Visual Studio Code](https://code.visualstudio.com/)** – Lightweight, powerful code editor.
  - Verify: `code --version`
- **[.NET SDK (LTS)](https://dotnet.microsoft.com/en-us/download/dotnet/)** – Build and run .NET applications.
  - Verify: `dotnet --version`
- **[Node.js (LTS)](https://nodejs.org/en/download/)** – JavaScript runtime for backend and tooling.
  - Verify: `node -v && npm -v`
- **[Git](https://git-scm.com/downloads)** – Distributed version control system.
  - Verify: `git --version`
- **[Azure Data Studio](https://learn.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio)** – SQL and database management tool.

---

##  VS Code Configuration (Extensions)

- **[C# (OmniSharp)](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)** – C# support with IntelliSense & debugging.
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** – Linting and error checking for JavaScript/TypeScript.
- **[Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** – Opinionated code formatter for consistency.
- **[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)** – AI code assistant (trial/if available).

---

##  Terminal Basics

###  Navigation

- `pwd` – Show current directory.
- `ls` – list files and folders.
- `cd` – change directory.
- `cd ..` – go up one level.

###  File Operations

- `mkdir` – create a new directory.
- `cat` – show file contents.
- `rm` – delete a file.
- `rmdir` – delete an empty directory.

###  Aliases

- `Set-Alias ll Get-ChildItem` – shortcut `ll` to list files.
- `Set-Alias gs git status` – shortcut `gs` to check Git status.

---

##  Windows PowerShell Tips

- `New-Item hello.txt -ItemType File` – Create a new empty text file.
- `Set-Alias ll Get-ChildItem` – define alias `ll` for file listing.
- `Set-Alias gs git status` – define alias `gs` for Git status.

---

##  Deliverables

- A markdown **environment setup checklist** committed to a new Git repository named **`onboarding-tools`**.

---

## 📚 Resources

- [VS Code Docs](https://code.visualstudio.com/docs)
- [.NET Install Guide](https://dotnet.microsoft.com/en-us/download/dotnet/)
- [Node.js Docs](https://nodejs.org/en/docs/)
- [Git Downloads & Docs](https://git-scm.com/doc)
- [Azure Data Studio](https://learn.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio)
