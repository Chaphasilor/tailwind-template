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

*On Windows you might get a warning about the command `export` not being recognized. You can safely ignore it :)*

3. Serve the files:

```
npx serve static
```

**Tip**: You can also run `npm run watch` to have webpack automatically rebuild on file changes! (You still need to manually refresh the page served by `serve` though...)

## Working with the template

- Place any static files (e.g. html, images) into the `static/` folder
- Place any files you want to run through webpack into the `src/` folder **and import the files in `index.js`** (or inside another js file that is already imported in `index.js`).  
  Check out how it's done with `test-dependency.js` :)

### Things to keep in mind

- Don't put anything inside `static/webpack/` as the folder is cleared on every build
- If you add aditional html pages, remember to include the webpack bundle in each one!  
  Just include `<script src="webpack/bundle.js"></script>` at the bottom of the html body
- If you change the output filename(s) inside the webpack config, you'll have to manually change them in each webpack bundle import (see above)