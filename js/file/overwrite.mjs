import {promises as fs} from 'fs';
import path from 'path';
import js_directory_ensure_exists from './../directory/ensure/exists.mjs';

export default async function js_file_overwrite(file_path, contents) {
    let directory_name = path.dirname(file_path);

    await js_directory_ensure_exists(directory_name);

    await fs.writeFile(file_path, contents);
}

