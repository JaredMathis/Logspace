import js_string_is from '../js/string/is.mjs'
import js_assert from '../js/assert.mjs';

let path = process.argv[2];
console.log({path});

js_assert(js_string_is)(path);

path = `./../${path}.mjs`

let imported = await import(path);

let args = process.argv.slice(3);

let result = await imported.default(...args);

console.log({result})