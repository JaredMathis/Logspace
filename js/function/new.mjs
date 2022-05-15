import js_file_overwrite from '../file/overwrite.mjs'

export default async function js_function_new(path) {
    let function_name = path.replace('/','_');
    await js_file_overwrite('./' + path + '.mjs', `
export default function ${function_name}() {

}
`);
}