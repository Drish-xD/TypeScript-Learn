import fs from 'fs';

export abstract class FileReader<T> {
  data: T[] = [];

  constructor(private filepath: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filepath, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((match: string): string[] => match.split(','))
      .map(this.mapRow);
  }
}
