import {promises as fs} from 'fs';

export default async function js_file_overwrite(path, contents) {
    await fs.writeFile(path, contents);
}