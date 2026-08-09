---
title: 'First post: how this template works'
description: 'A quick tour of the template and how to start writing.'
pubDate: 2026-07-10
tags: ['meta', 'astro']
---

Welcome. This first post doubles as a short guide to the template.

## Adding a post

Posts are plain Markdown files in `src/content/blog/`. Create a file
and fill in the frontmatter:

```md
---
title: 'Post title'
description: 'A short description for lists and RSS.'
pubDate: 2026-07-23
tags: ['tag1', 'tag2']
heroImage: './images/photo.png' # optional
draft: false                    # true — hide from the build
---

Post text...
```

## What's included

- Retro terminal styling: scanlines, glow, a hint of CRT flicker
- Two themes: amber and green phosphor (press `T`)
- Posts with photos — images are tinted to match the current theme
- Tags, a yearly archive, an RSS feed and a 404 page
- Keyboard shortcuts: `H` — home, `A` — archive, `T` — theme

> Blockquotes look like this. Handy for asides and quoted passages.

Ordered lists work too:

1. Write a post
2. Commit
3. Deploy

---

That's it. Happy writing.
