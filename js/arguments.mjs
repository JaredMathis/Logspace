import js_assert from "../js/assert.mjs";
import js_equals from "./equals.mjs";

export default function js_arguments(_arguments) {
    return function js_arguments_inner() {
        let argument_types = arguments;
        js_assert(js_equals)(argument_types.length, _arguments.length);
        js_list_for_each(argument_types, (a, index) => {
            js_assert(a)(_arguments[index]);
        });
    };
}
