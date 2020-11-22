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

## Working With The Template

### File Management

- Place any static files (e.g. html, images) into the `static/` folder
- Place any files you want to run through webpack into the `src/` folder **and import the files in `index.js`** (or inside another js file that is already imported in `index.js`).  
  Check out how it's done with `example-dependency.js` :)

### Colors

- All colors from the [default palette](https://tailwindcss.com/docs/customizing-colors) are available
- All additional colors from the [color palette reference](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) are **also** available. They can be accessed both in *lowercase* or *dromedarCase* for convenience (docs use dromedarCase, but I like my class names lowercase...).  
  *Keep in mind that some colors from the the color palette reference are aliased in the default palette ([take a look at this](https://github.com/tailwindlabs/tailwindcss/blob/3de0c48bd67f47c94f484bf7d92dc41e707e9abc/stubs/defaultConfig.stub.js#L15-L28)). So `amber` is actually the exact same as `yellow`. This shouldn't be an issue for you, just don't get a headache trying to figure out why a color isn't working ^^.*


### Things To Keep In Mind

- Don't put anything inside `static/webpack/` as the folder is cleared on every build
- If you add aditional html pages, remember to include the webpack bundle in each one!  
  Just include `<script src="webpack/bundle.js"></script>` at the bottom of the html body
- If you change the output filename(s) inside the webpack config, you'll have to manually change them in each webpack bundle import (see above)
