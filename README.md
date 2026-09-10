# Kexin Ye — Personal Portfolio

This repository contains the complete editable source code for the portfolio. It is a statically exported Next.js website and includes an automatic GitHub Pages deployment workflow.

## Publish with GitHub Pages

1. Create or open a GitHub repository.
2. Upload everything in this repository, including the hidden `.github` folder.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages** in GitHub.
5. Under **Build and deployment**, select **GitHub Actions**.
6. Open the **Actions** tab and wait for **Deploy personal website** to finish.

Every later commit to `main` automatically rebuilds and republishes the website.

## Edit locally

Install Node.js 22 and pnpm, then run:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open <http://127.0.0.1:3000>.

## Verify the static build

```bash
pnpm build
```

The static site is written to `out/`. Do not upload `node_modules`, `.next`, or `out`; GitHub Actions creates the deployable version automatically.

Editable content lives mainly in `lib/content.ts`, components in `components/`, and media assets in `public/`.
