<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Secrets

- Never open, read, search for, print, summarize, or include the contents of `.env` files or other secret-bearing files in responses.
- Treat `.env*` files as sensitive even though they are ignored by Git.
- If work depends on a secret, ask the user to configure it through a secure mechanism; do not ask them to paste the secret into chat.
