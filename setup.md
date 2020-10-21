# AlpineJS + TailwindCSS How-To

1. `npm init`
2. `npm i webpack webpack-cli`
3. create file `webpack.config.js` with the following content:
    ```javascript
    module.exports = {
      module: {
        rules: [
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    ident: 'postcss',
                    plugins: [
                      require('tailwindcss'),
                      require('autoprefixer'),
                    ],
                  },
                }
              }
            ]
          }
        ]
      }
    }
    ```
4. `npm install --save-dev postcss-loader postcss`
5. create file `postcss.config.js` with the following content:
    ```javascript
    module.exports = {
      plugins: [
        require('precss'),
        require('autoprefixer')
      ]
    }
    ```
6. `npm i autoprefixer`
7. `npm i tailwindcss`
8. create file `dist/index.html` with content:
    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>Document</title>

      </head>

      <body>

        <script src="main.js"></script>

      </body>
    </html>
    ```
9. remove entry `main` in `package.json`
10. `npm i uuid` (for testing webpack)
11. create file `src/index.js` with content:
    ```javascript
    import { v4 as uuid } from 'uuid';

    let element = document.createElement('div');
    element.innerHTML = uuid();
    document.body.appendChild(element);
    ```
12. `npx webpack --config webpack.config.js` and test if a random uuid appears when opening `dist/index.html`
13. `npx tailwindcss init`
14. `npm install --save-dev style-loader css-loader file-loader`
15. `npm install --save-dev clean-webpack-plugin`
