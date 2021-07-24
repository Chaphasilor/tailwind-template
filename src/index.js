import './tailwind.css'; // import tailwind so that it gets bundled by vite

// import *any file or dependency (module)* that you want to bundle here
import './example-dependency';

// regular javascript goes below

let baz = `baz`;

function foo() {

  let bar = `bar`

  return bar;

}

// !! IMPORTANT: !!
// Webpack doesn't automatically assing global variables to the window context when importing the bundle
// Assign all variables, functions and classes, that you want to be accessible from html, to the window context

window.foo = foo;
window.baz = baz;
