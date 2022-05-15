import js_range from '../../js/range.mjs'
export default function graph_new_complete(vertex_count) {
    let vertices = js_range(vertex_count);
    let result = [];
    js_list_for_each(vertices, v => {
        js_list_for_each(vertices, w => {
            if (w > v) {
                result.push([v, w]);
            }
        })
    });
    return result;
}
