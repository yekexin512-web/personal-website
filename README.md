# Casey Ye — personal website

A real Next.js App Router / TypeScript project, exported statically for hosting. Fonts are self-hosted. No remote font or animation runtime is required.

## Run

Node.js 20.9+ and pnpm are required.

```
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

The production website is in `out/`. Vercel can build the project directly. Other static hosts can serve `out/`.

## Content and assets

All supplied facts are in `lib/content.ts`. The `assets` object controls the F1 background, UN Monitor screenshot, communication images, email, LinkedIn, resume and paper link. Put assets in `public/` and use paths starting with `/`. Use optimized WebP/AVIF files. Set the final site origin in layout.tsx, robots.ts and sitemap.ts when moving hosts.

The supplied directory `D:\个人网站` was empty during implementation. The F1 photo, communication samples, contact details and paper file have not been fabricated. Current communication cards are editorial topic cards, not original screenshots. The F1 chapter uses a red typographic treatment until its image is supplied. Missing contact links are omitted. UN Monitor has a real external link and an opt-in live iframe; its initial overview is a designed product summary, not a screenshot.

## Implemented

Six persistent chapters, responsive mobile menu with focus containment/Escape, identity hover and focus states, chapter directory, parallel education/work timeline, three distinct experience scenes, editorial research, product preview, expandable build story, split fan decks, mobile project selector and horizontally scrollable cards, reduced-motion support, keyboard focus states, metadata, favicon, social cover, robots and sitemap.

## Remaining acceptance checks

The photo-based ending and original image decks require the missing assets. No Lighthouse score or browser/device interaction test is claimed. Run these before public launch, especially at 200% zoom and with final photos. All requested statistics are from the supplied brief; schematic UI is explicitly identified.
