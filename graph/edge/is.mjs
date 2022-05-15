import js_equals from "../../js/equals.mjs";
import js_list_is from "../../js/list/is.mjs";

export default function graph_edge_is(edge) {
    return js_list_is(edge) && js_equals(edge.length, 2);
}
