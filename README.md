# Tailwind Template

## Quick Start

1. Install all dependencies:

```
npm i
```

2. Build the project:

```
npm run build
```

3. Serve the files:

```
npx serve static
```

**Tip**: You can also run `npm run watch` to have webpack automatically rebuild on file changes! (You still need to manually refresh the page served by `serve` though...)

## Config

### Things to keep in mind

- Don't put anything inside `static/webpack` as the folder is cleared on every build
- If you change the output filenames inside the webpack config, you'll have to manually change them in `index.html`
- If you add aditional html pages, remember to include the webpack bundle in each one!