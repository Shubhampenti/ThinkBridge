# web-playground

Repository for **Git basics practice** and small **web experiments**.

---

## Output

- Initial commits with `index.html` and `.gitignore`.
- README with documented commit convention.

---

## Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) style for clear, machine-readable commit messages.

### Common Type

- **feat:** a new feature
- **fix:** a bug fix
- **docs:** documentation only changes
- **chore:** build process or auxiliary tools
- **style:** formatting (no code change)
- **refactor:** code change that neither fixes a bug nor adds a feature
- **test:** adding or updating tests

### Example

- `feat: add hero section to index.html`
- `fix: correct mobile nav layout`
- `docs: update README with commit conventions`
- `chore: add .gitignore and initial files`

---

## Git Workflow

### 1. Configure Git

```bash
git config --global user.name "shubham penti"
git config --global user.email "shubhampenti@example.com"
git config --global init.defaultBranch main
2. Initialize Repository
bash
Copy code
git init
git branch -M main
3. Stage & Commit Files
bash
Copy code
git add .
git commit -m "chore: add project skeleton and .gitignore"

git add README.md
git commit -m "docs: add README with commit convention"
4. Connect Remote & Push
Option A — GitHub Website

bash
Copy code
git remote add origin https://github.com/Shubhampenti/ThinkBridge.git
git push -u origin main
Option B — GitHub CLI

bash
Copy code
gh repo create YourUsername/web-playground --public --source=. --remote=origin --push

Inspect commits:

bash
Copy code
git log --oneline --graph --decorate
Check changes:



## Resources
Pro Git – Git Basics - https://developer.mozilla.org/en-US/docs/Web/HTML

gitignore Documentation - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements

Atlassian Git Tutorials - https://validator.w3.org/
```
