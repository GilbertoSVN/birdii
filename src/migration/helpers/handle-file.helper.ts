import { readFileSync } from 'fs';

class FileHelper {
  read(filepath: string): string {
    return readFileSync(filepath, 'utf8');
  }
}

export default new FileHelper();
