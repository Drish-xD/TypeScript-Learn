import { readFileSync } from 'fs';

export class FileReader {
  data: string[][] = [];

  constructor(private filepath: string) {}

  read(): void {
    this.data = readFileSync(this.filepath, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((match: string): string[] => match.split(','));
  }
}
