import js_arguments from "../js/arguments.mjs";
import js_list_is_of from "../js/list/is/of.mjs";

export default function graph_new(edges) {
    js_arguments(arguments)(js_list_is_of(graph_edge_is));
    return edges;
}
