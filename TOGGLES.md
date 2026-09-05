# Feature toggles

URL query parameters that change what the site renders. Useful for trying
work-in-progress UI without shipping it as the default.

Because the site is statically built, toggles are applied in the browser from
the query string (not at build time).

## `richLinks`

**Default:** the homepage Links section is a simple text list.

**Enable:** add `richLinks` to the query string (any value except `0` /
`false`).

Examples:

- `/?richLinks`
- `/?richLinks=1#links`
- `/#links?richLinks` — note: the hash must come after the query for the
  param to be read; prefer `/?richLinks#links`

When enabled, each link shows an image and a short body blurb instead of the
plain list.
