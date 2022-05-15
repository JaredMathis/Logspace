import {promises as fs} from 'fs';

export default async function js_directory_ensure_exists(directory_name) {
    try {
        await fs.stat(directory_name);
    } catch (e) {
        await fs.mkdir(directory_name, { recursive: true });
    }
}