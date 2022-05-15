
export default function js_list_for_each(list, lambda) {
    for (let e of list) {
        lambda(e)
    }
}
