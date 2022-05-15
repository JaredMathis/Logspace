import {promises as fs} from 'fs';
import path from 'path';

export default async function js_file_overwrite(file_path, contents) {
    let directory_name = path.dirname(file_path);

    try {
        await fs.stat(directory_name);
    } catch (e) {
        await fs.mkdir(directory_name, { recursive: true });
    }

    await fs.writeFile(file_path, contents);
}