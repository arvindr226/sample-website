# Contributing to the AI DevOps Field Guide

Thanks for improving this open knowledge resource. Contributions happen through GitHub issues and pull requests so every change remains reviewable and attributable.

## Ways to contribute

- Add or improve a Markdown blog in `src/content/blogs/`.
- Add a balanced discussion to `src/data/discussions.ts`.
- Add or correct a tool entry in `src/data/tools.ts`.
- Add a structured case study and matching Markdown notes.
- Improve roadmap descriptions, prerequisites, effort estimates, and links.
- Fix inaccurate, outdated, unclear, inaccessible, or unsafe content.

Use the matching issue template when proposing a substantial new entry.

## Editorial standards

1. Write for experienced infrastructure practitioners without assuming AI expertise.
2. Separate evidence, inference, opinion, and editorial ratings.
3. Do not add fake users, views, likes, votes, community scores, or popularity claims.
4. Discuss both benefits and failure modes.
5. For production automation, address identity, scope, policy, approval, rollback, and verification.
6. Prefer vendor-neutral explanations; disclose unavoidable product-specific assumptions.
7. Use original prose and cite primary sources when factual claims need support.

## Content process

1. Fork the repository and create a focused branch.
2. Edit content separately from presentation where possible.
3. Run `npm install` once, then `npm run lint`, `npm test`, and `npm run build`.
4. Confirm HashRouter links work and no content assumes a root `/` deployment.
5. Open a pull request using the template and explain the reader outcome.

## Blog checklist

- Include every required frontmatter field documented in the README.
- Use a unique lowercase slug.
- Prefer descriptive headings, short paragraphs, tables, and tested code examples.
- Label any illustrative architecture or result clearly.
- Add `githubDiscussionUrl` only when the discussion exists.

## Tool and rating checklist

- Link the official product or project site.
- Verify open-source status.
- Describe fit and tradeoffs without declaring a universal winner.
- Label numeric judgments as editorial.

Maintainers may edit submissions for clarity, consistency, safety, and accessibility.
