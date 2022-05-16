import js_list_for_each from "../../js/list/for_each.mjs";
import graph_new_complete from "./complete.mjs";

export default function graph_new_random(vertex_count) {
    let c = graph_new_complete(vertex_count);

    let result = [];
    js_list_for_each(c, e => {
        if (Math.random() < 0.5) {
            result.push(e);
        }
    })
    return result;
}
