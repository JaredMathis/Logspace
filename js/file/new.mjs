import {promises as fs} from 'fs';

export default async function js_file_new(path) {
    await fs.writeFile(path, ``);
}