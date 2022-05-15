export default function js_returns(_function, expected_value) {
    return function js_assert_inner() {
        let actual_value = _function(...arguments);
        if (!js_equals(actual_value, expected_value)) {
            js_error({actual_value, expected_value});
        }
    }
}