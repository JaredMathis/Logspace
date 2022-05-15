import js_string_is from '../js/string/is.mjs'
import js_assert from '../js/assert.mjs';

let path = process.argv[2];
console.log({path});

js_assert(js_string_is)(path);

let imported = await import(path);