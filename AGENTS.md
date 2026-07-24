## Required Reading Order

1. docs/INDEX.md

2. Read every document referenced inside INDEX.md

Documentation is the single source of truth.

Never skip documentation.

## Deployment Rules

- **No separate backend API.** Use mock data in `services/mock/data.ts`.
- **No OpenNext, Wrangler, or Workers.** Cloudflare Pages handles everything.
- **`git push` is the only deploy step.** Do not add npm deploy scripts.
- **Keep it simple.** Frontend-only Next.js app.