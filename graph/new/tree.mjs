import js_range from "../../js/range.mjs";

export default function graph_new_tree(vertex_count) {
    let remaining = js_range(vertex_count);
    let root = remaining.pop();
    let connected = [root];

    let result = [];

    while (remaining.length) {
        let from_index = js_random_range(connected.length);
        let to_index = js_random_range(remaining.length);
        
        console.log({from_index, to_index, connected, remaining})

        let to = remaining[to_index];
            
        result.push([connected[from_index], to]);

        remaining.splice(to_index, 1);
        connected.push(to);
    }

    return result;
}

function js_random_range(count) {
    return Math.floor(Math.random() * count)
}