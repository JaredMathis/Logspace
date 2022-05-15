import js_arguments from "../js/arguments.mjs";
import js_list_is_of from "../js/list/is/of.mjs";
import graph_edge_is from "c:/users/jared/logspace/graph/edge/is.mjs";

export default function graph_new(edges) {
    js_arguments(arguments)(js_list_is_of(graph_edge_is));
    return edges;
}
