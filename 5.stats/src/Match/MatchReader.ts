import { FileReader } from '../FileReader';
import { MatchData, MatchResult } from './types';
import { stringToDate } from './utils';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(private reader: DataReader) {}

  static fromCSV(filePath: string) {
    return new MatchReader(new FileReader(filePath));
  }

  load(): void {
    this.reader.read();

    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        stringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    );
  }
}
