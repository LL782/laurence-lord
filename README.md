# Laurence Lord - Creative Developer

Welcome to the repo for my personal website

[`laurencelord.co.uk`](https://www.laurencelord.co.uk)

## Developing this site

How we work is in [`SPEC.md`](./SPEC.md). Modules and order are in [`CAPABILITY-MAP.md`](./CAPABILITY-MAP.md). The current milestone is listed there; tasks live in [`tasks/todo.md`](./tasks/todo.md).

```bash
nvm use        # Node 20
npm i
npm run dev    # http://localhost:4321
npm run check  # Astro + TypeScript
npm run build  # merge gate
```

Deploys to [Netlify](https://app.netlify.com/teams/ll782/overview) from `main` (`netlify.toml`). Cursor agents follow `.cursor/skills/` (`/spec` → `/plan` → `/build` → `/test` → `/review` → `/ship`).

## About this

1. **Be yourself**

   For years I've overthought what others will think of my website.

   Then I had a thought that I found liberating...

   > This I write for myself, not for an audience

2. **Tech stack: _Convenient_**

   The site is built with [Astro](https://astro.build/) and MDX (JSX enriched markdown) to make editing quick and easy.

   I can edit content and redeploy it from the browser on my phone (which is nice).

3. **Open source. _Sure, why not?_**

   I'm not showing off but I'm not hiding anything.

   You can clone the repo, `npm i`, `npm run dev` and have this running at http://localhost:4321

   Or you can just dip in and steal the code you like. No worries

4. **More me**

   - [dog.5b Instagram](https://www.instagram.com/dog.5b/) (artwork)
   - [DC5B](https://www.dc5b.com) (side hustle)
   - [Ledger](https://www.ledger.com) (day job)

## Contributing

Feel free to browse the files, raise issues or suggest changes in any way you like.

## Maintenance notes (in case I forget)

Deploys to [Netlify](https://app.netlify.com/teams/ll782/overview) via commits to `main` branch, configured in `netlify.toml`.

Agents: start at [`AGENTS.md`](./AGENTS.md).
