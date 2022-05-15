import js_string_is from '../js/string/is.mjs'
import js_assert from 'c:/users/jared/logspace/js/assert.mjs';

let path = process.argv[2];
console.log({path});

js_assert(js_string_is)(path);